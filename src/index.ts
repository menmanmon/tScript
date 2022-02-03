import { getUserData, getFavoritesAmount } from './localStorage.js';
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'



window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData.userName, getUserData.avatarUrl, getFavoritesAmount.favoritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  interface SearchFormData {
    city: string
    checkInDate: string
    checkOutDate: string
    maxPrice: number
  }

  const searchForm = document.getElementById('search-form');
  if(searchForm == null) return
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchData: SearchFormData = {
      city: (<HTMLInputElement>document.getElementById('city')).value,
      checkInDate: (<HTMLInputElement>document.getElementById('check-in-date')).value,
      checkOutDate: (<HTMLInputElement>document.getElementById('check-out-date')).value,
      maxPrice: +(<HTMLInputElement>document.getElementById('max-price')).value,
    }
    console.log(searchData);
  })

})

