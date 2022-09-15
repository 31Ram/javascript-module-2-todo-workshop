/* *** Ejercicio 10: ***/
let todos = [];

const renderTodos = (todos) => {
  const todoList = document.querySelector("#todos");
  todoList.innerHTML = "";

  if (todos.length > 0) {
    todos.forEach((todo) => {
      todoList.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "There are no todos to show";
    todoList.appendChild(messageEl);
  }
};

const removeTodo = (todoEl) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.toLowerCase() === todoEl.textContent.toLowerCase();
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  todoText.textContent = todo;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todoText);
    renderTodos(todos);
  });

  return todoEl;
};

createTodos = (text) => {
  todos.push(text);
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodos(text);
    e.target.elements.text.value = "";
  }
  renderTodos(todos);
});

/* *** Ejercicio 9: *** 
let todos = [];

const renderTodos = (todos) => {
  const todoList = document.querySelector("#todos");
  todoList.innerHTML = "";

  if (todos.length > 0) {
    todos.forEach((todo) => {
      todoList.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "There are no todos to show";
    todoList.appendChild(messageEl);
  }
};

const removeTodo = (todoEl) => {
    const todoIndex = todos.findIndex((todo) => {
        return (todo.toLowerCase() === todoEl.textContent.toLowerCase());
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  todoText.textContent = todo;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  return todoEl;
};

createTodos = (text) => {
  todos.push(text);
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodos(text);
    e.target.elements.text.value = "";
  }
  renderTodos(todos);
});
*/

/* *** Ejercicio 8: ***
let todos = [];

const renderTodos = (todos) => {
  const todoList = document.querySelector("#todos");
  todoList.innerHTML = "";

  if (todos.length > 0) {
    todos.forEach((todo) => {
      todoList.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "There are no todos to show";
    todoList.appendChild(messageEl);
  }
};

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  todoText.textContent = todo;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  return todoEl;
};

createTodos = (text) => {
  todos.push(text);
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodos(text);
    e.target.elements.text.value = "";
  }
  renderTodos(todos);
});
*/

/* *** Ejercicio 7: ***
let todos = [];

const renderTodos = (todos) => {
  const todoList = document.querySelector('#todos')
  todoList.innerHTML = ''

  todos.forEach((todo)=>{
    todoList.appendChild(generateTodoDOM(todo))
  })
}

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const todoText = document.createElement('span');

  todoText.textContent = todo
  containerEl.appendChild(todoText)

  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  return todoEl
}

createTodos = (text) => {
  todos.push(text);
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodos(text);
    e.target.elements.text.value = '';
  }
  renderTodos(todos);
})
*/

/* *** Ejercicio 6: ***
let todos = [];

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const todoText = document.createElement('span');

  todoText.textContent = todo
  containerEl.appendChild(todoText)

  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild(containerEl)

  return todoEl
}

createTodos = (text) => {
  todos.push(text);
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if(text.length > 0){
    createTodos(text);
    e.target.elements.text.value = ''
  }

  console.log(todos);
})
*/

/* *** Ejercicio 5: ***
 let todos=[];

 createTodos=(text)=>{
   todos.push(text);
 }

 document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value.trim();

    if(text.length>0){
      createTodos(text);
      e.target.elements.text.value = ''
    }
 
    console.log(todos);
 })
 */

/* *** Ejercicio 4: ***
 document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log(text)
 })
 */

/* *** Ejercicio 3: ***
 let element = document.querySelector("#create");
 element.style.backgroundColor = "green";
*/

/* *** Ejercicio 2: ***
 let element= document.querySelector("#create");
 console.log(element);
*/

/* *** Ejercicio 1: ***
 Abrir y ejecutar los archivos de la carpeta JavaScript-Module-II
*/
