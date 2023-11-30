import { ComponentPropsWithRef, CSSProperties } from "react";
import styled from "@emotion/styled";

import { Typography, Tooltip, CircularProgress } from "@mui/material";
import { MessageOutlined } from "@mui/icons-material";

const GAP = 4;

const StyledRequestButton = styled.button`
  border: none;
  padding: 0;
  position: fixed;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 200ms;
  outline: none;
  box-shadow: none;
`;

const labelTextInlineStyle: CSSProperties = {
  display: "block",
  fontSize: "13px",
  lineHeight: 1,
  margin: 0,
  maxWidth: "160px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontFamily: "Noto Sans KR, sans-serif",
};

type GPTRequestButtonProps = {
  top: number;
  left: number;
  loading: boolean;
} & ComponentPropsWithRef<"button">;

function RequestButton({
  top,
  left,
  loading,
  style,
  ...restProps
}: GPTRequestButtonProps) {
  return (
    <Tooltip
      title={
        <Typography style={labelTextInlineStyle}>
          GPT에게 물어보세요!
        </Typography>
      }
    >
      <StyledRequestButton
        aria-busy={loading}
        disabled={loading}
        style={{
          ...style,
          top: `${top + GAP}px`,
          left: `${left + GAP}px`,
        }}
        {...restProps}
      >
        {loading ? (
          <CircularProgress size={20} color="info" style={{ color: "#fff" }} />
        ) : (
          <div className="bg-[#c20000] px-[4px] py-[2px] rounded-md">
            <MessageOutlined
              sx={{
                color: "#fff",
              }}
            />
          </div>
        )}
      </StyledRequestButton>
    </Tooltip>
  );
}

export default RequestButton;

const Logo = styled.div`
  font-weight: 900;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2px 4px;
  background-color: #c20000;
  font-family: "Montserrat", sans-serif !important;
  border-radius: 4px;
`;
