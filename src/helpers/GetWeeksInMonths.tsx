export function GetWeeksInMonth(
  year: number,
  month: number
): { start: string; end: string; dates: number[]; dayNames: string[] }[] {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeks = [];
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);
  const numDays = lastDate.getDate();

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
        start: `${weekStart}mar-${weekEnd}mar`,
        end: `${weekEnd}mar`,
        dates: currentWeek,
        dayNames: currentWeekDayNames,
      });
      currentWeek = [];
      currentWeekDayNames = [];
      weekStart = date + 1;
    }
  }

  return weeks;
}
