import styled from "@emotion/styled";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Dispatch, SetStateAction } from "react";
import { getMonth, getYear } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import RightArrow from "@/public/svg/right-arrow.svg";
import LeftArrow from "@/public/svg/left-arrow.svg";
import styles from "./DatePicker.module.scss";
import { ko } from "date-fns/esm/locale";

type WithRange = boolean | undefined;

interface Props {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2000 },
  (_, i) => getYear(new Date()) - i
);
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const KriticDatePicker = ({ selectedDate, setSelectedDate }: Props) => {
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
    <div className={styles.datePickerWrapper}>
      <DatePicker
      locale={ko}
        dateFormat="yyyy.MM.dd"
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        showYearDropdown
        scrollableYearDropdown
        shouldCloseOnSelect
        yearDropdownItemNumber={100}
        minDate={new Date("2000-01-01")}
        maxDate={new Date()}
        selected={selectedDate}
        calendarClassName={styles.calenderWrapper}
        dayClassName={(d) =>
          d.getDate() === selectedDate!.getDate()
            ? styles.selectedDay
            : styles.unselectedDay
        }
        inline
        onChange={(date) => setSelectedDate(date)}
        className={styles.datePicker}
        useWeekdaysShort={false}
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.customHeaderContainer}>
            <div>
              <span className={styles.month}>{MONTHS[getMonth(date)]}</span>
              <select
                value={getYear(date)}
                className={styles.year}
                onChange={({ target: { value } }) => changeYear(+value)}
              >
                {YEARS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={decreaseMonth}
                className={styles.monthButton}
                disabled={prevMonthButtonDisabled}
              >
                <LeftArrow />
              </button>
              <button
                type="button"
                onClick={increaseMonth}
                className={styles.monthButton}
                disabled={nextMonthButtonDisabled}
              >
                <RightArrow />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default KriticDatePicker;
