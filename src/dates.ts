const date = new Date();
const currentYear: number = date.getFullYear();
const currentMonth: string = ('0' + (date.getMonth() + 1)).slice(-2);
const nextMonth: string = ('0' + (date.getMonth() + 2)).slice(-2);
const currentDay: number = date.getDate();
export const defaultCheckInDate = `${currentYear}-${currentMonth}-${currentDay + 1}`;
export const defaultCheckOutDate = `${currentYear}-${currentMonth}-${currentDay + 3}`;
export const minCheckInDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const maxCheckOutDate = `${currentYear}-${nextMonth}-${daysInMonth(currentYear, nextMonth)}`;

function daysInMonth(year: number, month): number {
  return new Date(year, month, 0).getDate();
}
