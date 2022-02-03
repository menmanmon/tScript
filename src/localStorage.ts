const userObj = {
  userName:'Irishka Chiki-Piki', 
  avatarUrl: 'img/avatar.png',
}

const favoritesAmountObj = {
  favoritesAmount: 5,
}

localStorage.setItem('user', JSON.stringify(userObj));
localStorage.setItem('favoritesAmount', JSON.stringify(favoritesAmountObj));

const getDataFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(`${key}`) || '{}')
}

export const getUserData = getDataFromLocalStorage('user');
export const getFavoritesAmount = getDataFromLocalStorage('favoritesAmount');
