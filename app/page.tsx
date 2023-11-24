"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gradient } from "@/components/Animation/Gradient";
import styled from "@emotion/styled";
import RedGradientExtra from "@/components/svg/RedGradientExtra";
import RedGradientLarge from "@/components/svg/RedGradientLarge";
import RedGradientSmall from "@/components/svg/RedGradientSmall";
import RedGradientMedium from "@/components/svg/RedGradientMedium";
import Title from "@/components/Element/Title";
import SubTitle from "@/components/Element/SubTitle";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import GradientSection from "@/components/svg/GradientSection";
import HalfGradientSection from "@/components/svg/HalfGradientSection";
import { Footer } from "@/components/Layout";

export default function Home() {
  const scrollFadeIn0 = useScrollFadeIn(0.3, "20%");

  const scrollFadeIn1 = useScrollFadeIn(0.5, "50%");
  const scrollFadeIn2 = useScrollFadeIn(0.5, "50%");
  const scrollFadeIn3 = useScrollFadeIn(0.5, "50%");
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-hidden">
      <Grid className="max-w-[1440px]">
        <div>
          <RedGradientExtra />
        </div>
        <div className="flex flex-col gap-[47px]">
          <div>
            <RedGradientLarge />
          </div>
          <div className="flex gap-[43px]">
            <div className="flex flex-col justify-between">
              <Logo {...scrollFadeIn0}>Kritic</Logo>
              <RedGradientSmall />
            </div>
            <RedGradientMedium />
          </div>
        </div>
      </Grid>
      <Section bgColor="#F9FAFB">
        <div
          {...scrollFadeIn1}
          className=" text-center text-[28px] font-semibold"
        >
          기자를 위한 단 하나의 라이프 루틴 플랫폼
          <br />
          강력한 에디터와 AI 기반 지속 가능한 뉴스 읽기로 정보의 바다를
          항해하세요.
          <br />
          크리틱과 함께라면, 기자님의 일상은 더욱 빛나는 스토리가 됩니다.
        </div>
      </Section>
      <Section bgColor="#fff" className="max-w-[1440px] py-[200px]">
        <div
          {...scrollFadeIn2}
          className="flex items-baseline gap-[6px] w-full"
        >
          <Title>mm:bb</Title>
          <SubTitle>
            기자를 위한 최고의 에디터,{" "}
            <span className="font-semibold">명명백백</span>
          </SubTitle>
        </div>
        <Figure
          className="flex relative h-[948px] bg-[#f5f7f9] text-[9px] rounded-[15px] overflow-hidden p-4 z-20"
          style={{
            grid: "100%/repeat(1,calc(5px * 28)) 1fr",
            boxShadow:
              "0 192px 136px rgba(26,43,59,.23),0 70px 50px rgba(26,43,59,.16),0 34px 24px rgba(26,43,59,.13),0 17px 12px rgba(26,43,59,.1),0 7px 5px rgba(26,43,59,.07), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)",
          }}
        >
          <div className="bg-white text-[#667380] p-[18px] flex flex-col w-full"></div>
        </Figure>
      </Section>
      <GradientSection />
      <Section bgColor="#fff" className="max-w-[1440px] py-[200px]">
        <div
          {...scrollFadeIn3}
          className="flex items-baseline gap-[6px] w-full"
        >
          <Title>D:CRT</Title>
          <SubTitle>
            기사의 본질을 꿰뚫다,{" "}
            <span className="font-semibold">데카르트</span>
          </SubTitle>
        </div>
        <Figure
          className="flex relative h-[1542px] bg-[#f5f7f9] text-[9px] rounded-[15px] overflow-hidden p-2 z-20"
          style={{
            grid: "100%/repeat(1,calc(5px * 28)) 1fr",
            boxShadow:
              "0 192px 136px rgba(26,43,59,.23),0 70px 50px rgba(26,43,59,.16),0 34px 24px rgba(26,43,59,.13),0 17px 12px rgba(26,43,59,.1),0 7px 5px rgba(26,43,59,.07), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)",
          }}
        >
          <div className="bg-white text-[#667380] p-[18px] flex flex-col w-full"></div>
        </Figure>
      </Section>
      <HalfGradientSection />
    </main>
  );
}

const Grid = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  flex-wrap: nowrap;
  padding-bottom: 100px;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section<{
  bgColor?: string;
}>`
  width: 100%;
  min-height: 685px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
`;

const Figure = styled.figure`
  width: 100%;
`;
