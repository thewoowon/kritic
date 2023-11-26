"use client";
import React from "react";
import styled from "@emotion/styled";
import Button from "@/components/Element/Button";
import OpenAI from "@/public/svg/openai.svg";
import Recording from "@/public/svg/recording.svg";
import Streaming from "@/public/svg/streaming.svg";
import SpeechToText from "@/public/svg/speech-to-text.svg";
import Cartoon from "@/public/svg/cartoon.svg";
import Controller from "./Controller";
import Content from "./Content";

const Main = () => {
  return (
    <Grid>
      <Title>요동치는 중동, 제 3차대전의 도화선되나</Title>
      <Buttons>
        <Button rightIcon={<OpenAI />} />
        <Button rightIcon={<Recording />} label="REC" />
        <Button rightIcon={<Streaming />} label="STR" />
        <Button rightIcon={<SpeechToText />} label="STT" />
        <Button label="TEMPLATE" />
        <Button rightIcon={<Cartoon />} label="TOON" />
        <Button label="FACT CHECK" />
        <Button label="맞춤법 검사" />
        <Button label="가독성 교정" />
        <Button label="읽기 시간 추정" />
        <Button label="헤드라인 최적화" />
      </Buttons>
      <Box>
        <HeaderDecoration />
        <Controller />
        <Content />
      </Box>
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
  padding: 24px 0;

  overflow-x: scroll;
  overflow-y: hidden;
`;

const Box = styled.div<{
  maxHeight?: string;
}>`
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.maxHeight || "100%"};
  background-color: #ffffff;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
`;

const HeaderDecoration = styled.div`
  width: 100%;
  height: 9px;
  background: #c20000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;