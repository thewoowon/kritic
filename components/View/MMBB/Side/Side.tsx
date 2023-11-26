"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import KriticDatePicker from "@/components/Element/DatePicker";
import dynamic from "next/dynamic";

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
              <div></div>
            </Order>
            <Order>
              <div className="flex justify-between items-center w-full">
                <OrderTitle>오늘 취재할 내용</OrderTitle>
                <Confirm>확인하기</Confirm>
              </div>
            </Order>
            <Order>
              <div className="flex justify-between items-center w-full">
                <OrderTitle>주요 이슈 보고</OrderTitle>
                <Confirm>확인하기</Confirm>
              </div>
            </Order>
          </OrderList>
          <MiniView>hello</MiniView>
        </div>
      </Box>
      <Box>
        <Title>출근 지역</Title>
        <KriticMap />
      </Box>
      <Box>
        <KriticDatePicker selectedDate={date} setSelectedDate={setDate} />
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
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 11px;
  height: 66px;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
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

const MiniView = styled.div`
  flex: 1;
  height: 214px;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 14px 11px;
`;
