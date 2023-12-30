"use client";
import { DCRTApp, KriticApp, MMBBApp, NO17App } from "@/components/Element/App";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const tags = [
  {
    id: 1,
    name: "생성 AI",
  },
  {
    id: 2,
    name: "한국 언론",
  },
];

const NewsroomPage = () => {
  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-hidden bg-[#F9FAFB]">
      <Flex className="max-w-[980px] flex justify-center items-center flex-col">
        <Typography
          sx={{
            width: "100%",
            fontSize: "28px",
            fontWeight: "bold",
            lineHeight: "28px",
          }}
        >
          최신 뉴스
        </Typography>
        <TopTopic>
          <div className="px-[50px]">
            <KriticApp width="160px" height="160px" />
          </div>
          <div className="flex flex-col items-start gap-[20px]">
            <Tags>
              {tags.map((tag) => (
                <Tag key={tag.id}>{tag.name}</Tag>
              ))}
            </Tags>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: "18px",
              }}
            >
              크리틱이 그리는 언론의 미래
            </Typography>
            <Typography>2023년 12월 25일</Typography>
          </div>
        </TopTopic>
        <TopicGrid>
          <Topic>
            <MMBBApp width="160px" height="160px" />
          </Topic>
          <Topic>
            <DCRTApp width="160px" height="160px" />
          </Topic>
          <Topic>
            <NO17App width="160px" height="160px" />
          </Topic>
          <Topic></Topic>
          <Topic></Topic>
          <Topic></Topic>
        </TopicGrid>
      </Flex>
    </main>
  );
};

export default NewsroomPage;

const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
  flex-wrap: nowrap;
  padding: 100px 0;
`;

const TopTopic = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0 30px;
  height: 300px;
  border: 1px solid #f3f3f3;
  border-radius: 15px;
  background-color: #fff;
`;

const TopicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
`;

const Topic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
  height: 300px;
  border: 1px solid #f3f3f3;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  background-color: #111111;
  color: #fff;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    background-color: #c55c5c;
  }
`;
