import { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const DateCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => {
    setDate(date);
  };

  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"} gap={"4px"}>
        <Day>오늘</Day>
        <Today>{date.getDate()}</Today>
      </Box>
    </Container>
  );
};

export default DateCalendar;

const Container = styled.div`
  width: 100%;
  min-height: 88px;
  background-color: #ffffff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Day = styled.div`
  width: 100%;
  font-family: Pretendard Variable;
  font-size: 12px;
  color: #121212;
  line-height: 1;
`;

const Today = styled.div`
  width: 100%;
  font-family: Pretendard Variable;
  font-size: 36px;
  color: #121212;
  line-height: 1;
`;

const EventList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

const EventElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px 11px;
  height: 36px;
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
