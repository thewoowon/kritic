import delayPromise from "@/utils/delayPromise";
import { getSelectionNodeRect, getSelectionText } from "@/utils/selection";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useMachine } from "@xstate/react";
import dragStateMachine from "@/xState/dragStateMachine";
import { getPositionOnScreen } from "@/utils/getPositionOnScreen";
import { useChat } from "ai/react";
import { RequestButton } from "@/components/Element/Button";
import { parseSummaryResult, requestStreamApi } from "@/lib/chatGPT";
import ChatMessageBox from "@/components/Element/MessageBox/Chat";

const skipLoopCycleOnce = async () => await delayPromise(1);

const Content = ({ content }: { content: string }) => {
  const newsStringArray = content.split(" ");
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
    <Container
      ref={containerRef}
      className="w-full h-full px-[64px] py-[24px] overflow-scroll scroll"
    >
      <div className="flex items-center justify-center gap-[4px] border border-slate-100 my-[6px] font-medium text-sm">
        <div>평균 읽기 시간</div>
        <div className="text-[#C20000]">
          {Math.ceil(newsStringArray.length / 600)}분
        </div>
      </div>
      {content.split("\n").map((line, index_1) => {
        if (line.trim() === "") return;
        return (
          <Line key={index_1}>
            {line.split(" ").map((sentence, index_2) => {
              return <Sentence key={index_2}>{sentence}</Sentence>;
            })}
          </Line>
        );
      })}
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
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 64px;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Line = styled.div`
  margin-bottom: 24px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(255, 80, 80, 0.2);
    border-radius: 4px;
  }
`;

const Sentence = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
    background-color: rgba(135, 140, 255, 0.3);
  }
  padding: 0 2px;
`;

// fill: rgba(135, 140, 255, 0.20);
// fill: rgba(255, 80, 80, 0.20);
// fill: rgba(146, 255, 136, 0.30);
