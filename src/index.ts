import { getUserData, getFavoritesAmount } from './localStorage.js';
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'



window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData.userName, getUserData.avatarUrl, getFavoritesAmount.favoritesAmount)
  renderSearchFormBlock('2022-01-29', '2022-02-02')
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  interface SearchFormData {
    city: string
    checkInDate: Date
    checkOutDate: Date
    maxPrice: number
  }

  const searchForm = document.getElementById('search-form')
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchData: SearchFormData = {
      city: document.getElementById('city').value,
      checkInDate: document.getElementById('check-in-date').value,
      checkOutDate: document.getElementById('check-out-date').value,
      maxPrice: +document.getElementById('max-price').value
    }
    console.log(searchData);
  })

})

