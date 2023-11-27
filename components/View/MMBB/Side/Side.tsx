"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import KriticDatePicker from "@/components/Element/DatePicker";
import dynamic from "next/dynamic";
import Image from "next/image";
import Satellite from "@/public/svg/satellite.svg";

const memoList = [
  {
    id: 1,
    title: "국회 출입증 받기!!",
    content: "출입증 없으면 안됨 ㅜㅜ D+5, 까먹지 말고...",
    src: "/static/kritic-static-1.png",
  },
  {
    id: 2,
    title: "데스크회의 자료 출력 필수",
    content: "김상현 국장님도 참가함. 준비 못하면 그날은...",
    src: "/static/kritic-static-2.png",
  },
  {
    id: 3,
    title: "밀키트 챙기기",
    content: "OO 마켓에서 밀키트 재주문 하고 두개 챙겨야...",
    src: "/static/kritic-static-3.png",
  },
];

const KriticMap = dynamic(() => import("@/components/Element/Map"), {
  ssr: false,
});

const Side = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <Grid>
      <Box>
        <Title>모닝 브리핑</Title>
        <div className="w-full pt-[17px] flex flex-row gap-[8px]">
          <OrderList>
            <Order>
              <div className="flex justify-between items-center w-full">
                <OrderTitle>전일 뉴스 종합</OrderTitle>
                <Confirm>확인하기</Confirm>
              </div>
              <div>전일 뉴스 총 104건 준비되었습니다.</div>
            </Order>
            <Order>
              <div className="flex justify-between items-center w-full">
                <OrderTitle>오늘 취재할 내용</OrderTitle>
                <Confirm>확인하기</Confirm>
              </div>
              <div>OO대 이사장 국정 감사 파행</div>
            </Order>
            <Order>
              <div className="flex justify-between items-center w-full">
                <OrderTitle>주요 이슈 보고</OrderTitle>
                <Confirm>확인하기</Confirm>
              </div>
              <div>새벽 03시 OO고속도로 13중 추돌 사고... 3명 사망</div>
            </Order>
          </OrderList>
          <MemoView>
            <HeaderDecoration />
            {memoList.map((memo) => (
              <MemoItem key={memo.id}>
                <div className="flex flex-col gap-[4px]">
                  <MemoTitle>{memo.title}</MemoTitle>
                  <MemoContent>{memo.content}</MemoContent>
                </div>
                <Image src={memo.src} width={46} height={46} alt="thumbnail" />
              </MemoItem>
            ))}
          </MemoView>
        </div>
      </Box>
      <Box>
        <div className="flex w-full justify-between items-center">
          <Title>출근 지역</Title>
          <SatelliteDiv>
            <Satellite />
          </SatelliteDiv>
        </div>
        <KriticMap />
      </Box>
      <Box className="flex flex-col justify-between">
        <div>
          <KriticDatePicker selectedDate={date} setSelectedDate={setDate} />
        </div>
        <AlertBox>데스크 보고 시간입니다. 시간을 준수하세요.</AlertBox>
      </Box>
    </Grid>
  );
};

export default Side;

const Grid = styled.div`
  min-width: 320px;
  width: 512px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 13px;
  grid-auto-flow: column;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 0.5px solid #d7d7d7;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
`;

const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 11px;
  height: 66px;
  border: 0.5px solid #d7d7d7;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const OrderTitle = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Confirm = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  // 언더라인 gap
  display: flex;
  border-bottom: 0.8px solid #5f5f5f;
`;

const MemoView = styled.div`
  flex: 1;
  height: 214px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: 0.5px solid #d7d7d7;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const MemoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 11px;
  height: 54px;
  min-height: 54px;
  border-bottom: 0.5px solid #d7d7d7;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  &:hover {
    background-color: rgba(224, 179, 23, 0.7);
  }
  &:active {
    background-color: rgba(224, 179, 23, 0.7);
  }
  &:focus {
    background-color: rgba(224, 179, 23, 0.7);
  }
`;

const MemoTitle = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MemoContent = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const HeaderDecoration = styled.div`
  width: 100%;
  height: 9px;
  background: #c20000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const SatelliteDiv = styled.div`
  border-radius: 3px;
  border: 0.5px solid #d7d7d7;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 6px;
`;

const AlertBox = styled.div`
  width: 100%;
  height: 24px;
  background-color: #c20000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard Variable;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
