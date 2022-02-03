const date = new Date();
const currentYear: number = date.getFullYear();
// const currentMonth: string = ('0' + (date.getMonth() + 1)).slice(-2);
// const nextMonth: string = ('0' + (date.getMonth() + 2)).slice(-2);
// const currentMonthNum: number = date.getMonth() + 1;
// const currentMonthStr: string = '0' + currentMonthNum;
// const nextMonthNum: number = date.getMonth() + 2;
// const nextMonthStr: string = '0' + nextMonthNum;

const currentDay: number = date.getDate();
export const defaultCheckInDate = `${currentYear}-${getCurrentMonthOrDay('currentMonth', 1)}-${getCurrentMonthOrDay('currentDay', 1)}`;
export const defaultCheckOutDate = `${currentYear}-${getCurrentMonthOrDay('currentMonth', 1)}-${getCurrentMonthOrDay('currentDay', 3)}`;
export const minCheckInDate = `${currentYear}-${getCurrentMonthOrDay('currentMonth', 1)}-${getCurrentMonthOrDay('currentDay', 0)}`;
export const maxCheckOutDate = `${currentYear}-${getCurrentMonthOrDay('currentMonth', 2)}-${daysInMonth(currentYear, date.getMonth() + 2)}`;

/**
 * Функция добавлаяет '0' к месяцу или дню, если число меньше 10
 * @param dayOrMonth {string} - месяц или день (в зависимости от того, что нужно получить)
 * @param num {number} - число, на которое нужно сдвинуть дату 
 * @returns {number | string} - если результат < 10, то строка, например '05', если больше 10, то двухзначное число
 */
function getCurrentMonthOrDay (dayOrMonth: string, num: number): number | string {
  let currentDate: number | string = 0;
  if(dayOrMonth == 'currentMonth') {
    currentDate = date.getMonth() + num
  } else if (dayOrMonth == 'currentDay'){
    currentDate = date.getDate() + num
  }
  if(currentDate <= 9) {
    return '0' + currentDate
  } else return currentDate
}

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
window.addEventListener('DOMContentLoaded', () => {
  console.log(defaultCheckInDate, defaultCheckOutDate, minCheckInDate, maxCheckOutDate);
})
