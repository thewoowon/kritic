"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import KriticDatePicker from "@/components/Element/DatePicker";
import dynamic from "next/dynamic";
import Image from "next/image";
import Satellite from "@/public/svg/satellite.svg";
import Cross from "@/public/svg/cross.svg";
import DateCalendar from "@/components/Element/DateCalendar";
import Search from "@/public/svg/search.svg";

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

const scheduleList = [
  {
    id: 1,
    time: "09:00",
    content: "국회의사당 도착",
    description: "국회의사당 1번 출입구에서 기자증 제시",
  },
  {
    id: 2,
    time: "11:00",
    content: "OO당 당대표 기자간담회",
    description: "3열 4번 자리 확보",
  },
  {
    id: 3,
    time: "12:00",
    content: "식사 회동",
    description: "OO식당에서 식사",
  },
  {
    id: 4,
    time: "15:00",
    content: "데스크 보고",
    description: "OO기자단 데스크 보고",
  },
  {
    id: 5,
    time: "17:00",
    content: "저녁 식사 회동",
    description: "OO식당에서 식사",
  },
  {
    id: 6,
    time: "17:30",
    content: "OOO 간사 방문",
    description: "잠시 문서 전달 차 온다고 연락",
  },
  {
    id: 7,
    time: "18:30",
    content: "데스크 피드백 확인",
    description: "OO기자단 데스크 피드백 확인",
  },
  {
    id: 8,
    time: "19:00",
    content: "마감 전화",
    description: "OO기자단 마감 전화",
  },
];

const KriticMap = dynamic(() => import("@/components/Element/Map"), {
  ssr: false,
});

const Side = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <Grid>
      <SearchView>
        {/* 여기는 검색창 */}
        <SearchIcon>
          <Search />
        </SearchIcon>
        <SearchInput placeholder="검색어를 입력하세요." />
      </SearchView>
      <div className="flex gap-[9px]">
        <Box backgroundColor="transparent">
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
            <Order>
              <div className="flex justify-between items-center w-full">
                <OrderTitle>실시간 키워드</OrderTitle>
                <Confirm>확인하기</Confirm>
              </div>
              <div>빅카인즈 키워드</div>
            </Order>
          </OrderList>
        </Box>
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
          <CrossButton className="absolute w-[38px] h-[38px] z-10 bg-[#C20000] rounded-full flex justify-center items-center">
            <Cross />
          </CrossButton>
        </MemoView>
      </div>
      <Box alignItems="center">
        <KriticMap />
      </Box>
      <BottomGrid>
        <ActivityView>
          {/* 이곳에는 사용자가 최근에 작업한 기사, 리뷰한 내용, 또는 코멘트한 항목 */}
          <ActivityList>
            <Activity>
              <ActivityLeft>
                <div className="rounded-full border-2 w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/jr-1.jpg"}
                    alt="journalist"
                  />
                </div>
              </ActivityLeft>
              <div className="py-[5px]">
                <div className="flex justify-between items-center w-full">
                  <ActivityTitle>
                    OOOO 공개매수 종료...주가 4%대 하락
                  </ActivityTitle>
                </div>
                <div className="text-[#333333] font-normal">김희정 기자</div>
                <div>{new Date().toISOString().slice(0, 10)}</div>
              </div>
            </Activity>
            <Activity>
              <ActivityLeft>
                <div className="rounded-full border-2 w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/jr-2.jpg"}
                    alt="journalist"
                  />
                </div>
              </ActivityLeft>
              <div className="py-[5px]">
                <div className="flex justify-between items-center w-full">
                  <ActivityTitle>
                    4배 뛰었다...치솟는 운임에 커지는 물류대란 우려
                  </ActivityTitle>
                </div>
                <div className="text-[#333333] font-normal">김석일 기자</div>
                <div>{new Date().toISOString().slice(0, 10)}</div>
              </div>
            </Activity>
            <Activity>
              <ActivityLeft>
                <div className="rounded-full border-2 w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/jr-3.jpg"}
                    alt="journalist"
                  />
                </div>
              </ActivityLeft>
              <div className="py-[5px]">
                <div className="flex justify-between items-center w-full">
                  <ActivityTitle>
                    검찰, ‘허위사실 공표’ 혐의 OOO 교육감 기소
                  </ActivityTitle>
                </div>
                <div className="text-[#333333] font-normal">이주빈 기자</div>
                <div>{new Date().toISOString().slice(0, 10)}</div>
              </div>
            </Activity>
            <Activity>
              <ActivityLeft>
                <div className="rounded-full border-2 w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/jr-4.jpg"}
                    alt="journalist"
                  />
                </div>
              </ActivityLeft>
              <div className="py-[5px]">
                <div className="flex justify-between items-center w-full">
                  <ActivityTitle>
                    2나노 핵심 장비 인텔로 먼저 갔다…OOO
                  </ActivityTitle>
                </div>
                <div className="text-[#333333] font-normal">심경빈 기자</div>
                <div>{new Date().toISOString().slice(0, 10)}</div>
              </div>
            </Activity>
          </ActivityList>
        </ActivityView>
        <ScheduleView>
          <DateCalendar />
          <ScheduleList>
            {scheduleList.map((schedule) => (
              <ScheduleItem key={schedule.id}>
                <div className="flex flex-row justify-between items-center gap-[4px] w-full">
                  <ScheduleTime>{schedule.time}</ScheduleTime>
                  <ScheduleContent>{schedule.content}</ScheduleContent>
                </div>
                <ScheduleDescription>
                  {schedule.description}
                </ScheduleDescription>
              </ScheduleItem>
            ))}
          </ScheduleList>
        </ScheduleView>
        {/* <AlertBox>데스크 보고 시간입니다. 시간을 준수하세요.</AlertBox> */}
      </BottomGrid>
    </Grid>
  );
};

export default Side;

const Grid = styled.div`
  min-width: 320px;
  width: 512px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 0.2fr 1fr 1fr 1fr;
  grid-gap: 13px;
  grid-auto-flow: column;
`;

const Box = styled.div<{
  backgroundColor?: string;
  alignItems?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems || "flex-start"};
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 0;
`;

const OrderList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  border: 0.5px solid #d7d7d7;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
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
  color: #c20000;
  font-family: Pretendard Variable;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  // 언더라인 gap
  display: flex;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 1px;
    text-decoration-color: #c20000;
  }
`;

const MemoView = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: 0.5px solid #d7d7d7;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
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
    background-color: #ffdf7f;
  }
  &:active {
    background-color: #ffdf7f;
  }
  &:focus {
    background-color: #ffdf7f;
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

const CrossButton = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  bottom: 12px;
  right: 12px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const ScheduleView = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  border: 0.5px solid #d7d7d7;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;

const ScheduleList = styled.div`
  width: 100%;
  height: 176px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScheduleItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 11px;
  height: 36px;
  min-height: 36px;
  border-bottom: 0.5px solid #d7d7d7;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  &:hover {
    background-color: #ffdf7f;
  }
  &:active {
    background-color: #ffdf7f;
  }
  &:focus {
    background-color: #ffdf7f;
  }
`;

const ScheduleTime = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ScheduleContent = styled.div`
  color: #c20000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ScheduleDescription = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const BottomGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 9px;
  grid-auto-flow: column;
`;

const ActivityView = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const SearchView = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  border: 0.5px solid #d7d7d7;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 0 0 12px;
  padding: 3px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: Pretendard Variable;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: #000;
  padding: 0 12px;
  &::placeholder {
    color: #d7d7d7;
  }
`;

const ActivityList = styled.div`
  width: 100%;
  height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Activity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 8px;
  border: 0.5px solid #d7d7d7;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  gap: 8px;
`;

const ActivityLeft = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActivityTitle = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
