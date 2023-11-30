import delayPromise from "@/utils/delayPromise";
import { getSelectionNodeRect, getSelectionText } from "@/utils/selection";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useMachine } from "@xstate/react";
import dragStateMachine from "@/xState/dragStateMachine";
import { getPositionOnScreen } from "@/utils/getPositionOnScreen";
import { useChat } from "ai/react";
import { RequestButton } from "@/components/Element/Button";
import toast from "react-hot-toast";
import { Line, Radar, Bar } from "react-chartjs-2";

const skipLoopCycleOnce = async () => await delayPromise(1);

const Main = ({ news }: { news: News }) => {
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
    <Container ref={containerRef} className="w-full overflow-hidden">
      <Title>{news.title}</Title>
      <GPTBox>
        <div>GPT 기사 요약</div>
        <div>{news.summary}</div>
      </GPTBox>
      {news.content.split("\n").map((line, index) => {
        if (line.trim() === "") return;
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
`;

const KriticLine = styled.div`
  margin-bottom: 24px;
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
