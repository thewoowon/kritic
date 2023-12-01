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
import { Line, Radar, Bar } from "react-chartjs-2";
import {
  LeftMessageBox,
  RightMessageBox,
} from "@/components/Element/MessageBox";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const barLabels1 = ["전전월", "전월"];
const barLabels2 = ["신용대출", "전세대출", "주담대"];

export const barData1 = {
  labels: barLabels1,
  datasets: [
    {
      label: "가계대출 잔액",
      data: [680.8, 682.3],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const barData2 = {
  labels: barLabels2,
  datasets: [
    {
      label: "전전월",
      data: [680.8, 682.3, 680.8],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "전월",
      data: [680.8, 682.3, 680.8],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
          <Bar options={options} data={barData1} />
          <Bar options={options} data={barData2} />
        </LeftMessageBox>
      ),
    },
    {},
    {
      rightMessage: (
        <RightMessageBox>
          <div>GPT 간단 요약</div>
          <div className="flex flex-col gap-[4px]">
            <div>[정책의 목표]</div>
            <div>가계대출을 억제하는 것</div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <div>[대책]</div>
            <div>가산 금리 인상</div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <div>[근거]</div>
            <div>현시점 동결 유지 기간</div>
          </div>
        </RightMessageBox>
      ),
    },
    {
      leftMessage: (
        <LeftMessageBox>
          <Bar options={options} data={barData1} />
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
        return new Promise((resolve, reject) => {
          resolve({ firstChunk: "firstChunk" });
        });
      },
    },
  });
  useEffect(() => {
    const onMouseUp = async (event: MouseEvent) => {
      await skipLoopCycleOnce();
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
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseup", onMouseUp);
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
          <div className="text-[#ffe700]">주의 ⚠</div>
          <div>
            주관이 강하게 반영되어 있습니다. 그로 인해 객관성이 떨어질 수
            있습니다. 주의하세요.
          </div>
        </RightMessageBox>
      </Title>
      <GPTBox>
        <div>GPT 기사 요약</div>
        <div>{news.summary}</div>
      </GPTBox>
      {news.content.split("\n").map((line, index) => {
        if (line.trim() === "") return;
        const bundleIndex = Math.floor(index / 2);
        return (
          <KriticLine
            key={index}
            onClick={() => {
              toast.success("곧 새로운 기능으로 만나요!", {
                icon: "😆",
                position: "top-center",
                style: {
                  borderRadius: "10px",
                  background: "#FFFFFF",
                  color: "#000000",
                },
              });
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
        onSubmit={handleSubmit}
        style={{
          display: "none",
        }}
      >
        <input
          type="text"
          name="question"
          placeholder="대화를 시작하세요!"
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
    </Container>
  );
};

export default Main;

// grid columns 3개로 나누기
const Container = styled.div`
  position: relative;
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
  position: relative;
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
  & > div:first-child {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  & > div:last-child {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }
`;
