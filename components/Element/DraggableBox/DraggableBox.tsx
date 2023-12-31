import Draggable from "react-draggable";
import { ReactNode } from "react";

type DraggableBoxProps = {
  nodeRef: React.RefObject<HTMLDivElement>;
  defaultX: number;
  defaultY: number;
  children: ReactNode;
};

export default function DraggableBox({
  nodeRef,
  defaultY,
  defaultX,
  children,
}: DraggableBoxProps) {
  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag_gpt_handle"
      defaultPosition={{ x: defaultX, y: defaultY }}
      bounds="body"
    >
      {children}
    </Draggable>
  );
}

DraggableBox.handlerClassName = "drag_gpt_handle";
