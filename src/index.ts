import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

// const checkInDate = document.getElementById('check-in-date')
// const checkOutDate = document.getElementById('check-out-date')

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', 'img/avatar.png', 3)
  renderSearchFormBlock('2022-01-29', '2022-03-02')
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
