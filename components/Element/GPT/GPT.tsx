"use client";
import styled from "@emotion/styled";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { useChat } from "ai/react";

const GPT = ({ mode }: { mode: "modal" | "inline" }) => {
  const { messages, input, handleInputChange, handleSubmit, data, isLoading } =
    useChat();

  return (
    <GPTContainer mode={mode}>
      <GPTAnswer>
        {messages.length > 0
          ? messages.map((m) =>
              m.role === "user" ? (
                <div key={m.id} className="w-full flex justify-end">
                  <UserChatBox className="flex items-baseline gap-2">
                    <div>{m.content}</div>
                    <div className="text-[12px] font-light">{`${new Date()
                      .getHours()
                      .toString()
                      .padStart(2, "0")}:${new Date()
                      .getMinutes()
                      .toString()
                      .padStart(2, "0")}`}</div>
                  </UserChatBox>
                </div>
              ) : (
                <div key={m.id}>
                  <GPTChatBox className="flex items-baseline gap-2">
                    <div>{m.content}</div>
                    <div className="text-[12px] font-light">{`${new Date()
                      .getHours()
                      .toString()
                      .padStart(2, "0")}:${new Date()
                      .getMinutes()
                      .toString()
                      .padStart(2, "0")}`}</div>
                  </GPTChatBox>
                </div>
              )
            )
          : null}
      </GPTAnswer>
      <GPTForm
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "space-between",
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <CircularProgress
              size={20}
              color="info"
              style={{
                color: "#fff",
              }}
            />
          ) : (
            "Chat!"
          )}
        </button>
      </GPTForm>
    </GPTContainer>
  );
};

export default GPT;

const GPTContainer = styled.div<{ mode: "modal" | "inline" }>`
  position: ${(props) => (props.mode === "modal" ? "absolute" : "relative")};
  left: ${(props) => (props.mode === "modal" ? "50%" : "auto")};
  top: ${(props) => (props.mode === "modal" ? "50%" : "auto")};
  transform: ${(props) =>
    props.mode === "modal" ? "translate(-50%, -50%)" : "none"};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #d7d7d7;
`;

const GPTAnswer = styled.div`
  padding: 20px 0;
  border-radius: 5px;
  font-size: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  // Hide scrollbar for IE, Edge and Firefox
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // Hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }
  placeholder {
    color: #333333;
  }
  height: 300px;
  resize: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const GPTForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
  input {
    flex: 1;
    height: 28px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    border: 0.5px solid #d7d7d7;
    font-size: 11px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 53px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    border: 0.5px solid #d7d7d7;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    color: #fff;
    font-weight: bold;
    background-color: #c20000;
  }
`;

const UserChatBox = styled.div`
  border-radius: 10px 10px 0px 10px;
  background-color: #c20000;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #d7d7d7;
  color: #fff;
  font-family: Pretendard Variable;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 150% */
  padding: 5px 8px;
`;

const GPTChatBox = styled.div`
  border-radius: 0px 10px 10px 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #d7d7d7;
  color: #333;
  font-family: Pretendard Variable;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 150% */
  padding: 5px 8px;
`;
