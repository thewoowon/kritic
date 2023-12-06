import {
  ComponentPropsWithRef,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styled from "@emotion/styled";
import { PositionOnScreen } from "@/utils/getPositionOnScreen";
import useRootOutsideClick from "@/hooks/useRootOutsideClick";
import getSafePixel from "@/utils/getSafePixel";
import DraggableBox from "../../DraggableBox";
import { Box, Stack, Typography } from "@mui/material";
import OpenAI from "@/public/svg/openai.svg";
import XIcon from "@/public/svg/x-icon.svg";

const GAP = 8;

const MessageBoxContainer = styled.div<{ width: number }>`
  background: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 9999;

  white-space: pre-wrap;

  width: ${(p) => p.width}px;
  min-width: ${(p) => p.width}px;
  max-width: ${(p) => p.width}px;

  border-radius: 5px;
  padding: 12px;
  font-size: 14px;
  line-height: 16px;
  p {
    margin: 0;
    color: #000;
  }
  box-shadow: 0 0 0 1px #e2e8f0, 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const StyledCloseButton = styled.button`
  cursor: pointer;
  margin: 0;
  background: transparent;
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 4px;
  color: #000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;

  &:active {
    outline: none;
    transform: scale(0.9);
    transition: all ease-in-out 100ms;
  }
`;

export type MessageBoxProps = {
  isOutsideClickDisabled?: boolean;
  anchorTop: number;
  anchorCenter: number;
  anchorBottom: number;
  content: ReactNode;
  footer?: ReactNode;
  width: number;
  onClose: () => void;
  positionOnScreen: PositionOnScreen;
};

export default function ChatMessageBox({
  anchorCenter,
  anchorTop,
  anchorBottom,
  width,
  content,
  onClose,
  positionOnScreen,
  footer,
  isOutsideClickDisabled,
  ...restProps
}: MessageBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useRootOutsideClick({
    ref: containerRef,
    isDisabled: isOutsideClickDisabled,
    handler: onClose,
  });

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const boxCenterPosition = anchorCenter - width / 2;
    const height = containerRef.current.getBoundingClientRect().height;

    switch (positionOnScreen) {
      case "topLeft":
      case "topRight": {
        containerRef.current.style.top = getSafePixel(anchorBottom + GAP);
        containerRef.current.style.left = getSafePixel(boxCenterPosition);
        return;
      }
      case "bottomLeft":
      case "bottomRight": {
        containerRef.current.style.top = getSafePixel(anchorTop - GAP - height);
        containerRef.current.style.left = getSafePixel(boxCenterPosition);
        return;
      }
    }
  }, [
    containerRef,
    anchorCenter,
    anchorBottom,
    anchorTop,
    positionOnScreen,
    width,
  ]);

  // TODO withDraggableBox 등으로 로직 추출
  const containerRefRect = useMemo(() => {
    return containerRef.current?.getBoundingClientRect();
  }, []);

  return (
    <DraggableBox
      nodeRef={containerRef}
      defaultX={containerRefRect?.x ?? 0}
      defaultY={containerRefRect?.y ?? 0}
    >
      <MessageBoxContainer width={width} ref={containerRef} {...restProps}>
        <Stack>
          <div className="drag_gpt_handle flex items-center justify-between mb-[8px">
            <div
              className="flex items-center gap-[4px]"
              style={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <OpenAI />
              드래그 GPT
            </div>
            <StyledCloseButton onClick={onClose}>
              <XIcon />
            </StyledCloseButton>
          </div>
          <Stack
            sx={{
              fontSize: 12,
            }}
          >
            {typeof content === "string" ? (
              <Typography color="black" fontSize={12}>
                {content}
              </Typography>
            ) : (
              content
            )}
          </Stack>
          {footer}
        </Stack>
      </MessageBoxContainer>
    </DraggableBox>
  );
}
