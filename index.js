let todoList = document.getElementById('displayed');
let button = document.getElementById('btn');
let item = document.getElementById('input');
let counter = 0;
let heading = document.getElementById('heading')

button.addEventListener('click', function() {
  if(counter < 10) {
    let todoItem = document.createElement('p');
    todoItem.innerText = item.value
    todoItem.id = 'to-do-item'
    todoList.appendChild(todoItem);
    counter++;
    item.value = '';
    todoItem.addEventListener('click', function() {
      todoItem.style.textDecoration = "line-through";
    })
    todoItem.addEventListener('dblclick', function() {
      todoList.removeChild(todoItem);
      counter--;
      heading.innerText = "Please add your new to-do items"
    })
  }
  else {
    heading.innerText = "Remove items before adding more!"
  }
})
