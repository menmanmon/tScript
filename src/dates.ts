const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
const nextMonth = ('0' + (date.getMonth() + 2)).slice(-2);
const currentDay = date.getDate();
export const defaultCheckInDate = `${currentYear}-${currentMonth}-${currentDay + 1}`;
export const defaultCheckOutDate = `${currentYear}-${currentMonth}-${currentDay + 3}`;
export const minCheckInDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const maxCheckOutDate = `${currentYear}-${nextMonth}-${daysInMonth(nextMonth, currentYear)}`;

function daysInMonth(month: any, year: any) {
  return new Date(year, month, 0).getDate();
}
