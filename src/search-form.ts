import { renderBlock } from './lib.js'

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
const nextMonth = ('0' + (date.getMonth() + 2)).slice(-2);
const currentDay = date.getDate();
const defaultCheckInDate = `${currentYear}-${currentMonth}-${currentDay + 1}`;
const defaultCheckOutDate = `${currentYear}-${currentMonth}-${currentDay + 3}`;
const minCheckInDate = `${currentYear}-${currentMonth}-${currentDay}`;
const maxCheckOutDate = `${currentYear}-${nextMonth}-${daysInMonth(nextMonth, currentYear)}`;

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function renderSearchFormBlock (checkInDate: Date, checkOutDate: Date) {

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${defaultCheckInDate} min=${minCheckInDate} max=${maxCheckOutDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${defaultCheckOutDate} min=${defaultCheckInDate} max=${maxCheckOutDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
