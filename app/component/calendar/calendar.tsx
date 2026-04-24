import React from "react";
import styles from "../../style/calendar.module.css";

interface CalendarProps {
  year: number;
  month: number; // 0 = January
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];

  // 빈 칸 채우기
  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }

  // 날짜 채우기
  for (let date = 1; date <= lastDate; date++) {
    cells.push(date);
  }

  return (
    <div>
      <h1 className={styles.title}>{year}년 {month + 1}월</h1>
      <div className={styles.calendar}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.header}>{day}</div>
        ))}
        {cells.map((date, idx) => (
          <div key={idx} className={styles.day}>
            {date ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
