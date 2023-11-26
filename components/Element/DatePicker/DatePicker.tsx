import styled from "@emotion/styled";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

type WithRange = boolean | undefined;

const KriticDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null],
    event: React.SyntheticEvent<any> | undefined
  ) => {
    const [start, end] = date as [Date, Date];
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
};

export default KriticDatePicker;
