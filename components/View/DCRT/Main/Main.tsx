import delayPromise from "@/utils/delayPromise";
import { getSelectionNodeRect, getSelectionText } from "@/utils/selection";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { useMachine } from "@xstate/react";
import dragStateMachine from "@/xState/dragStateMachine";
import { getPositionOnScreen } from "@/utils/getPositionOnScreen";
import { useChat } from "ai/react";
import { RequestButton } from "@/components/Element/Button";
import toast from "react-hot-toast";
import { Bar, Chart } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import {
  LeftMessageBox,
  RightMessageBox,
} from "@/components/Element/MessageBox";
import OpenAI from "@/public/svg/openai.svg";
import ChartRiseArrow from "@/public/svg/chart-rise-arrow.svg";
import { parseSummaryResult, requestStreamApi } from "@/lib/chatGPT";
import ChatMessageBox from "@/components/Element/MessageBox/Chat";

export const options: ChartOptions<"bar" | "line"> = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "right", // 범례의 위치를 오른쪽으로 설정
    },
    title: {
      display: false,
      text: "가계대출 잔액 비교", // 차트의 제목
    },
    // bar 데이터 셋에만 라벨 설정
  },
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: false,
        text: "(조 원)", // X축의 제목
      },
    },
    y: {
      // Y축의 설정은 이미지에 따라 조정될 수 있습니다.
      beginAtZero: false,
      title: {
        display: false,
        text: "기간", // Y축의 제목
      },
      min: 680,
      max: 683,
      ticks: {
        // 필요하다면 여기에 더 많은 설정을 추가할 수 있습니다.
        callback: (value) => {
          return `${value}조`;
        },
      },
    },
  },
};

export const options2: ChartOptions<"bar"> = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "right", // 범례의 위치를 오른쪽으로 설정
    },
    title: {
      display: false,
      text: "신용대출, 전세대출, 주담대 비교", // 차트의 제목
    },
    // bar 데이터 셋에만 라벨 설정
  },
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: false,
        text: "(조 원)", // X축의 제목
      },
    },
    y: {
      // Y축의 설정은 이미지에 따라 조정될 수 있습니다.
      beginAtZero: false,
      title: {
        display: false,
        text: "기간", // Y축의 제목
      },
    },
  },
};

const barLabels1 = ["전전월", "전월"];
const barLabels2 = ["신용대출", "전세대출", "주담대"];
const barLabels3 = ["8월", "9월"];

export const barData1: ChartData<"bar" | "line"> = {
  labels: barLabels1,
  datasets: [
    {
      type: "bar",
      label: "가계대출 잔액",
      data: [680.8, 682.3],
      backgroundColor: ["#92FF88", "rgba(48, 56, 255, 0.60)"],
      barThickness: 36,
      datalabels: {
        display: true,
        color: "black",
        align: "top",
        anchor: "end",
        formatter: (value) => {
          return `${value}조`;
        },
      },
    },
    {
      type: "line", // "line"으로 설정하면 선 차트가 됩니다.
      label: "가계대출 잔액 추이",
      data: [680.8, 682.3],
      fill: false,
      borderColor: "#C20000",
      tension: 0.1, // 선의 곡률을 설정 (0은 직선)
      // 선 차트 관련 다른 설정들...
      pointStyle: "circle",
      pointRadius: 5,
      pointBorderColor: "#C20000",
      datalabels: {
        display: false,
      },
    },
  ],
};

export const barData2: ChartData<"bar" | "line"> = {
  labels: barLabels1,
  datasets: [
    {
      type: "bar",
      label: "가계대출 잔액",
      data: [680.8, 682.3],
      backgroundColor: ["#92FF88", "rgba(48, 56, 255, 0.60)"],
      barThickness: 36,
      datalabels: {
        display: true,
        color: "black",
        align: "top",
        anchor: "end",
        formatter: (value) => {
          return `${value}조`;
        },
      },
    },
  ],
};

export const barData3: ChartData<"bar"> = {
  labels: barLabels3,
  datasets: [
    {
      type: "bar",
      label: "전전월",
      data: [1000, 1000, 1000],
      backgroundColor: ["#92FF88", "rgba(48, 56, 255, 0.60)"],
      barThickness: 36,
      datalabels: {
        display: true,
        color: "black",
        align: "top",
        anchor: "end",
        formatter: (value) => {
          return `${value}`;
        },
      },
    },
    {
      type: "bar",
      label: "전월",
      data: [680, 682.3, 682.3],
      backgroundColor: ["#92FF88", "rgba(48, 56, 255, 0.60)"],
      barThickness: 36,
      datalabels: {
        display: true,
        color: "black",
        align: "top",
        anchor: "end",
        formatter: (value) => {
          return `${value}`;
        },
      },
    },
  ],
};

const skipLoopCycleOnce = async () => await delayPromise(1);

const Main = ({ news }: { news: News }) => {
  const newsSideContent: SideMessageType[] = [
    {
      rightMessage: (
        <RightMessageBox>해당 기사의 핵심 주제입니다!</RightMessageBox>
      ),
    },
    {
      rightMessage: (
        <RightMessageBox>
          해당 수치정보는 시중은행의 공식 공시 정보와 일치하는 것으로
          확인되었습니다. 안심하고 정보를 활용하세요! 😆
        </RightMessageBox>
      ),
      leftMessage: (
        <LeftMessageBox>
          <BasicChartContainer>
            <InnerChartContainer>
              <Chart options={options} data={barData2} type="bar" />
            </InnerChartContainer>
            <InnerChartContainer>
              <OverlayBox>
                <ChartRiseArrow />
              </OverlayBox>
            </InnerChartContainer>
          </BasicChartContainer>
        </LeftMessageBox>
      ),
    },
    {},
    {
      rightMessage: (
        <RightMessageBox>
          <div className="flex items-center gap-[4px] text-[#0055FF]">
            GPT 기사 요약 📄
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="font-semibold">[정책의 목표]</div>
            <div>가계대출을 억제하는 것</div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="font-semibold">[대책]</div>
            <div>가산 금리 인상</div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="font-semibold">[근거]</div>
            <div>현시점 동결 유지 기간</div>
          </div>
        </RightMessageBox>
      ),
    },
    {
      leftMessage: (
        <LeftMessageBox>
          <div>
            주담대 혼합형(고정) 금리(은행채 5년물 기준) 차이를 비교했습니다.
          </div>
          <BasicChartContainer>
            <Chart options={options2} data={barData3} type="bar" />
          </BasicChartContainer>
        </LeftMessageBox>
      ),
    },
    {
      rightMessage: (
        <RightMessageBox>
          오피니언입니다. 매몰되지 않도록 주의하세요.
        </RightMessageBox>
      ),
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, input, handleInputChange, handleSubmit, data, isLoading } =
    useChat();
  const [windowPosition, setWindowPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const [state, send] = useMachine(dragStateMachine, {
    actions: {
      setPositionOnScreen: (context) => {
        const { left, width, height, top } = context.selectedTextNodeRect;
        const verticalCenter = left + width / 2;
        const horizontalCenter = top + height / 2;
        context.positionOnScreen = getPositionOnScreen({
          horizontalCenter,
          verticalCenter,
        });
      },
    },
    services: {
      getGPTResponse: (context) => {
        return new Promise(async (resolve, reject) => {
          await skipLoopCycleOnce();
          const response = await requestStreamApi({
            messages: context.selectedText,
          });

          const result = await parseSummaryResult(response, (chunk) => {
            send("RECEIVE_ING", { data: chunk });
            resolve({
              firstChunk: chunk,
            });
          });

          send("RECEIVE_END");
          resolve({ firstChunk: result });
        });
      },
    },
  });
  useEffect(() => {
    const onMouseUp = async (event: MouseEvent) => {
      await skipLoopCycleOnce();
      console.log(event.clientY, event.clientX);
      console.log(getSelectionNodeRect());
      send({
        type: "TEXT_SELECTED",
        data: {
          selectedText: getSelectionText(),
          selectedNodeRect: getSelectionNodeRect(),
          requestButtonPosition: {
            top: event.clientY,
            left: event.clientX,
          },
        },
      });
    };
    const currentContainer = containerRef.current; // 현재의 containerRef.current 값을 변수에 할당
    if (currentContainer) {
      currentContainer.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mouseup", onMouseUp);
      }
    };
  }, [send]);

  const requestGPT = () => {
    send("REQUEST");
  };

  const closeMessageBox = () => {
    send("CLOSE_MESSAGE_BOX");
  };
  return (
    <Container ref={containerRef} className="w-full">
      <Title>
        {news.title}
        <RightMessageBox>
          <div className="text-[#ff5e00]">주의 ⚠</div>
          <div>
            주관이 강하게 반영되어 있습니다. 그로 인해 객관성이 떨어질 수
            있습니다. 주의하세요.
          </div>
        </RightMessageBox>
      </Title>
      <GPTBox>
        <div
          className="flex items-center gap-[4px]"
          style={{
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          <OpenAI />
          GPT 기사 요약
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {news.summary}
        </div>
      </GPTBox>
      {news.content.split("\n").map((line, index) => {
        if (line.trim() === "") return;
        const bundleIndex = Math.floor(index / 2);
        return (
          <KriticLine
            key={index}
            onClick={() => {
              send("CLOSE_MESSAGE_BOX");
              return;
            }}
          >
            {line}
            {newsSideContent[bundleIndex] &&
              newsSideContent[bundleIndex].leftMessage}
            {newsSideContent[bundleIndex] &&
              newsSideContent[bundleIndex].rightMessage}
          </KriticLine>
        );
      })}
      <div className="font-medium text-sm">
        <div>
          {news.press} - {news.journalist} 기자
        </div>
        <div className="font-light">{news.date}</div>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          display: "none",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          name="question"
          required
          value={input}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button ref={buttonRef} type="submit" disabled={isLoading}></button>
      </form>
      {state.hasTag("showRequestButton") && (
        <RequestButton
          onClick={requestGPT}
          loading={state.matches("loading")}
          top={state.context.requestButtonPosition.top}
          left={state.context.requestButtonPosition.left}
        />
      )}
      {state.matches("temp_response_message_box") && (
        <ChatMessageBox
          content={state.context.chats.at(-1)?.content}
          width={480}
          isOutsideClickDisabled={true}
          onClose={() => send("RECEIVE_CANCEL")}
          anchorTop={state.context.anchorNodePosition.top}
          anchorCenter={state.context.anchorNodePosition.center}
          anchorBottom={state.context.anchorNodePosition.bottom}
          positionOnScreen={state.context.positionOnScreen}
        />
      )}
      {state.matches("response_message_box") && (
        <ChatMessageBox
          content={state.context.chats.at(-1)?.content}
          width={480}
          isOutsideClickDisabled={true}
          onClose={() => send("CLOSE_MESSAGE_BOX")}
          anchorTop={state.context.anchorNodePosition.top}
          anchorCenter={state.context.anchorNodePosition.center}
          anchorBottom={state.context.anchorNodePosition.bottom}
          positionOnScreen={state.context.positionOnScreen}
        />
      )}
      <div className="text-center text-3xl pt-[60px]">
        AISNR(AI-driven Sustainable News Reading)
      </div>
      <div className="text-center text-lg">
        <span className="text-[#0055FF]">AI 기반 지속 가능한 뉴스 읽기</span>를
        만나보세요.
      </div>
    </Container>
  );
};

export default Main;

// grid columns 3개로 나누기
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 24px;
  position: relative;
`;

const KriticLine = styled.div`
  position: relative;
  margin-bottom: 48px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(255, 80, 80, 0.2);
    border-radius: 4px;
    text-decoration-color: #000;
    text-decoration-thickness: 1px;
  }
`;

const GPTBox = styled.div`
  border-radius: 5px;
  border: 0.5px solid #d7d7d7;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 15px;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BasicChartContainer = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  margin: 12px 0;
  position: relative;
`;

const InnerChartContainer = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  position: absolute;
`;

const OverlayBox = styled.div`
  width: fit-content;
  position: absolute;
  top: 30%; // 이미지의 Y 위치 조정
  left: 55%; // 이미지의 X 위치 조정
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
