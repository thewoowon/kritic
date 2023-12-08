"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import OpenAI from "@/public/svg/openai.svg";
import Recording from "@/public/svg/recording.svg";
import Streaming from "@/public/svg/streaming.svg";
import SpeechToText from "@/public/svg/speech-to-text.svg";
import Cartoon from "@/public/svg/cartoon.svg";
import Controller from "./Controller";
import Content from "./Content";
import GPT from "@/components/Element/GPT";
import { Button } from "@/components/Element/Button";

const Main = () => {
  const [showGPT, setShowGPT] = useState(false);
  return (
    <Grid>
      <Title>요동치는 중동, 제 3차대전의 도화선되나</Title>
      <Buttons>
        <Button
          rightIcon={<OpenAI />}
          onClick={() => {
            setShowGPT(!showGPT);
          }}
        />
        <Button rightIcon={<Recording />} label="REC" />
        <Button
          rightIcon={<Streaming />}
          label="STR"
          onClick={() => {
            return;
          }}
        />
        <Button
          rightIcon={<SpeechToText />}
          label="STT"
          onClick={() => {
            return;
          }}
        />
        <Button label="TEMPLATE" />
        <Button
          rightIcon={<Cartoon />}
          label="TOON"
          onClick={() => {
            return;
          }}
        />
        <Button label="FACT CHECK" />
        <Button
          label="맞춤법 검사"
          onClick={() => {
            return;
          }}
        />
        <Button
          label="가독성 교정"
          onClick={() => {
            return;
          }}
        />
        <Button
          label="헤드라인 최적화"
          onClick={() => {
            return;
          }}
        />
      </Buttons>
      <Box>
        <HeaderDecoration />
        <Controller />
        <Content />
      </Box>
      {showGPT && <GPT mode="modal" />}
    </Grid>
  );
};

export default Main;

const Grid = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ellipsis: "";
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 7px;
  flex-wrap: nowrap;
  padding: 22px 0;

  overflow-x: hidden;
  overflow-y: hidden;
`;

const Box = styled.div<{
  maxHeight?: string;
}>`
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.maxHeight || "100%"};
  background-color: #ffffff;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #d7d7d7;
`;

const HeaderDecoration = styled.div`
  width: 100%;
  height: 9px;
  background: #c20000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
