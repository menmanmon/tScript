window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnId');
  btn.addEventListener('click', getTodosByCount)
})

interface ToDoResponse {
  completed: boolean
  id: number
  title: string
  userId: number
}

const getTodosByCount = () => {
  const inputValue: number = +document.getElementById('inputId').value;
  for (let  i = 1; i <= inputValue; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    .then<ToDoResponse>(response => response.json())
    .then((json) => {
        if (json.title == null) {
          throw Error(`There is no ToDo from https://jsonplaceholder.typicode.com/todos/${i}`)
        } return console.log(json)
      })
  }
}
