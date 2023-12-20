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
import { KriticCartoon } from "@/components/Element/Cartoon";
import toast from "react-hot-toast";

const newsString = `이스라엘의 가자지구 지상군 투입이 초읽기에 들어가면서 이란의 개입 등 확전 가능성에 관심이 쏠리고 있다. 연일 ‘하마스 소탕’을 공언해온 이스라엘과 이스라엘에 ‘선제 조치’를 경고한 이란 모두 ‘두 개의 전선’에 대한 부담감으로 딜레마에 빠진 분위기다.

22일(현지시간) 로이터통신은 복수의 이란 관리들을 인용해 이란 정부가 이스라엘-하마스 전쟁에 어디까지 개입할지를 두고 군사, 외교, 국내적 우선순위를 저울질하고 있다고 보도했다. 이란 최고위 지도자들은 전쟁에 깊숙이 개입할 경우 발생할 수 있는 국내 정치적 리스크와 이란 정부가 그간 추진해온 중동지역 내 패권 전략을 두고 고심하고 있는 것으로 전해졌다.

이란은 그간 팔레스타인 무장정파 하마스·이슬라믹 지하드 뿐만 아니라 레바논의 헤즈볼라, 예멘 내 후티 반군, 시리아 바샤르 아사드 정권 등을 지원하면서 사우디아라비아 등 수니파 국가들과 역내 패권을 다퉈왔다.

예멘의 한 소식통은 “이스라엘의 공격으로 하마스와 이슬라믹 지하드의 팔레스타인 내 권력 기반이 파괴되다면, 이란이 중동 전역에 걸쳐 무장단체를 ‘대리 세력’으로 내세워 구축한 네트워크가 손상될 가능성도 커진다”고 말했다.

이런 상황에서 이란이 이스라엘의 가자지구 공격을 방관한다면, 이슬람 시아파의 ‘맹주’로서 이란이 40년 넘게 구축해온 지역 패권에 균열이 생길 수 있다. 이란이 키워온 ‘대리 세력’들이 이를 이란의 약점으로 인식하게 되고, 동시에 팔레스타인을 오랫 동안 옹호해온 이란의 입지에도 타격이 불가피해진다.

그렇지만 직접 개입에 나서기에는 이란이 직면한 국내외적 상황도 녹록지 않다. 이란 경제는 2018년 도널드 트럼프 미국 행정부가 이란 핵협정 파기 후 대규모 경제 재제를 부활시키며 위기에 빠졌다. 여기에 더해 지난해 ‘히잡 시위’를 비롯한 반정부 시위가 최근까지 이어지고 있다.

이런 상황에서 섣불리 전쟁에 개입했다가 이스라엘과 미국의 반격으로 막대한 군사적 피해을 입을 경우 국민적 분노에 직면할 수 있다. 이란의 한 고위 외교관은 로이터통신에 “이란 최고 지도자인 아야톨라 알리 하메네이에게 최우선 순위는 이슬람공화국의 생존”이라며 “이것이 이란 당국이 이스라엘을 강력한 수사로 비판하면서도 직접적인 군사 개입은 자제해온 이유”라고 말했다.`;

const Main = () => {
  const [showGPT, setShowGPT] = useState(false);
  const [showCartoon, setShowCartoon] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("요동치는 중동, 제 3차대전의 도화선되나");
  const [content, setContent] = useState(newsString);

  const handleCartoon = async () => {
    const response = await fetch("/api/dalle", {
      method: "POST",
      body: JSON.stringify({
        prompt:
          "중동의 심장, 위태로운 평화: 이스라엘과 가자의 긴장이 국제적 위기로 번질 위험",
      }),
    });

    const data = await response.json();

    setImageUrl(data.image_url);
    setShowCartoon(true);
  };
  return (
    <Grid>
      <Title>{title}</Title>
      <Buttons>
        <Button
          rightIcon={<OpenAI />}
          label="크리틱챗"
          onClick={() => {
            setShowGPT(!showGPT);
          }}
        />
        <Button
          rightIcon={<Recording />}
          label="녹음"
          onClick={() => {
            return;
          }}
        />
        <Button
          rightIcon={<Streaming />}
          label="스트리밍"
          onClick={() => {
            return;
          }}
        />
        <Button
          rightIcon={<SpeechToText />}
          label="텍스트 추출"
          onClick={() => {
            return;
          }}
        />
        <Button
          rightIcon={<Cartoon />}
          label="만평 생성"
          onClick={handleCartoon}
        />
        <Button
          label="템플릿"
          onClick={() => {
            return;
          }}
        />
        <Button label="초안 작성" />
        <Button
          label="맞춤법 검사"
          onClick={() => {
            // 맞춤법 검사 -> gpt
            return;
          }}
        />
        <Button
          label="가독성 교정"
          onClick={() => {
            // 가독성 교정 -> gpt
            setContent(`이스라엘의 가자 지구 지상군 투입이 초읽기에 들어가면서, 이란의 개입과 확전 가능성이 주목받고 있다. 이스라엘은 ‘하마스 소탕’을 공언하고 있으며, 이스라엘에 ‘선제 조치’를 경고한 이란은 두 개의 전선에 대한 부담감으로 딜레마에 빠져있다.

            22일(현지 시간) 로이터 통신에 따르면, 이란 정부는 군사, 외교, 국내적 우선순위를 저울질하며 어디까지 개입할지 고민하고 있다. 이란의 최고위 지도자들은 전쟁에 깊숙이 개입할 경우 국내 정치적 리스크와 중동 지역 내 패권 전략에 대해 고심하고 있다.
            
            이란은 하마스, 이슬라믹 지하드, 레바논의 헤즈볼라, 예멘의 후티 반군, 시리아의 바샤르 아사드 정권 등을 지원하며, 사우디아라비아 등 수니파 국가들과 패권을 다투어왔다. 예멘의 소식통은, 이스라엘의 공격으로 하마스와 이슬라믹 지하드의 팔레스타인 내 권력 기반이 파괴될 경우, 이란이 중동 전역에 걸쳐 무장 단체를 ‘대리 세력’으로 내세워 구축한 네트워크가 손상될 가능성이 크다고 말했다.
            
            이란이 이스라엘의 가자 지구 공격을 방관한다면, 이슬람 시아파의 ‘맹주’로서 이란이 40년 넘게 구축해온 지역 패권에 균열이 생길 수 있다. 이란이 키워온 ‘대리 세력’들이 이를 이란의 약점으로 인식하게 되고, 동시에 팔레스타인을 오랫동안 옹호해온 이란의 입지에도 타격이 불가피해진다.
            
            그러나 직접 개입에 나서기에는 이란이 직면한 국내외적 상황도 녹록지 않다. 이란 경제는 2018년 도널드 트럼프 미국 행정부가 이란 핵 협정 파기 후 대규모 경제 제재를 부활시키며 위기에 빠졌다. 여기에 더해, 지난해 ‘히잡 시위’를 비롯한 반정부 시위가 최근까지 이어지고 있다.`);
            return;
          }}
        />
        <Button
          label="헤드라인 최적화"
          onClick={() => {
            // 헤드라인 최적화 -> gpt
            setTitle(
              "중동의 심장, 위태로운 평화: 이스라엘과 가자의 긴장이 국제적 위기로 번질 위험"
            );
            toast.success("헤드라인을 최적화 했어요!", {
              icon: "📰",
              position: "top-center",
              style: {
                borderRadius: "5px",
                background: "#FFFFFF",
                color: "#000000",
              },
            });

            return;
          }}
        />
      </Buttons>
      <Box>
        <HeaderDecoration />
        <Controller />
        <Content content={content} />
      </Box>
      {showGPT && <GPT mode="modal" />}
      {showCartoon && <KriticCartoon mode="modal" imageUrl={imageUrl} />}
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
