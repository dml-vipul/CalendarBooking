import { ReactNode } from "react";

interface WeekProps {
  year?: number;
  month?: number;
}

interface Week {
  [x: string]: ReactNode;
  start: string;
  end: string;
  dates: number[];
  dayNames: string[];
}

function GetWeeksInMonth(year: number, month: number): Week[] {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeks = [];
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);
  const numDays = lastDate.getDate();

  console.log(numDays);

  const monthName = new Intl.DateTimeFormat("en", { month: "short" })
    .format(firstDate)
    .toLowerCase();

  let dayOfWeekCounter = firstDate.getDay();
  let currentWeek = [];
  let currentWeekDayNames = [];
  let weekStart = 1;

  for (let date = 1; date <= numDays; date++) {
    currentWeek.push(date);
    currentWeekDayNames.push(daysOfWeek[(dayOfWeekCounter + date - 1) % 7]);

    if (currentWeek.length === 7 || date === numDays) {
      const weekEnd = date;
      weeks.push({
        start: `${weekStart} ${monthName}`,
        end: `${weekEnd} ${monthName}`,
        dates: currentWeek,
        dayNames: currentWeekDayNames,
        monthName: monthName,
      });
      currentWeek = [];
      currentWeekDayNames = [];
      weekStart = date + 1;
    }
  }

  return weeks;
}

export default GetWeeksInMonth;
