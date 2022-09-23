/* *** Ejercicio 17: ***/
let todos = [];

const renderTodos = (todos) => {
    let filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(filters.searchTitle.toLowerCase()))
    if(filters.showFinished && filters.showUnfinished) {

    } else if(filters.showFinished) {
      filteredTodos = filteredTodos.filter((todo) => todo.completed)
    } else if(filters.showUnfinished) {
      filteredTodos = filteredTodos.filter((todo) => !todo.completed)
    }
    
    const todoList = document.querySelector('#todos')
    todoList.innerHTML = ''

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoList.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no todos to show'
        todoList.appendChild(messageEl)
    }
}

const setFilters = (updates) => {
  if (typeof updates.searchTitle === "string") {
    filters.searchTitle = updates.searchTitle;
  }
  if (typeof updates.showFinished === "boolean") {
    filters.showFinished = updates.showFinished;
  }
  if (typeof updates.showUnfinished === "boolean") {
    filters.showUnfinished = updates.showUnfinished;
  }
};

const filters = {
  searchTitle: "",
  showFinished: false,
  showUnfinished: false,
};

const toggleTodo = (title) => {
  const todo = todos.find(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (title) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const generateTodoDOM = (todoObj) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todoObj.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todoObj.title);
    renderTodos(todos);
  });

  todoText.textContent = todoObj.title;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todoObj.title);
    renderTodos(todos);
  });

  return todoEl;
};

const createTodo = (text) => {
  todos.push({
    title: text,
    completed: false,
  });
};

document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchTitle: e.target.value,
  });
  renderTodos(todos);
});

document.querySelector("#show-finished").addEventListener("change", (e) => {
  setFilters({
    showFinished: e.target.checked,
  });
  renderTodos(todos);
});

document.querySelector("#show-unfinished").addEventListener("change", (e) => {
  setFilters({
    showUnfinished: e.target.checked,
  });
  renderTodos(todos);
});

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }

  renderTodos(todos);
});

/* *** Ejercicio 16: ***/
/*
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

const setFilters = (updates) => {
  if (typeof updates.searchTitle === "string") {
    filters.searchTitle = updates.searchTitle;
  }
  if (typeof updates.showFinished === "boolean") {
    filters.showFinished = updates.showFinished;
  }
  if (typeof updates.showUnfinished === "boolean") {
    filters.showUnfinished = updates.showUnfinished;
  }
};

const filters = {
  searchTitle: "",
  showFinished: false,
  showUnfinished: false,
};

const toggleTodo = (title) => {
  const todo = todos.find(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (title) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const generateTodoDOM = (todoObj) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todoObj.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todoObj.title);
    renderTodos(todos);
  });

  todoText.textContent = todoObj.title;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todoObj.title);
    renderTodos(todos);
  });

  return todoEl;
};

const createTodo = (text) => {
  todos.push({
    title: text,
    completed: false,
  });
};

document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchTitle: e.target.value,
  });
  renderTodos(todos);
});

document.querySelector("#show-finished").addEventListener("change", (e) => {
  setFilters({
    showFinished: e.target.checked,
  });
  renderTodos(todos);
});

document.querySelector("#show-unfinished").addEventListener("change", (e) => {
  setFilters({
    showUnfinished: e.target.checked,
  });
  renderTodos(todos);
});

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }

  renderTodos(todos);
});
*/
/* *** Ejercicio 15: ***/
/*
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

const setFilters = (updates) => {
    if (typeof updates.searchTitle === 'string') {
        filters.searchTitle = updates.searchTitle
    }
    if (typeof updates.showFinished === 'boolean') {
        filters.showFinished = updates.showFinished
    }
    if (typeof updates.showUnfinished === 'boolean') {
        filters.showUnfinished = updates.showUnfinished
    }
}

const filters = {
    searchTitle: '',
    showFinished: false,
    showUnfinished: false
}

const toggleTodo = (title) => {
  const todo = todos.find(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (title) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const generateTodoDOM = (todoObj) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todoObj.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todoObj.title);
    renderTodos(todos);
  });

  todoText.textContent = todoObj.title;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todoObj.title);
    renderTodos(todos);
  });

  return todoEl;
};

const createTodo = (text) => {
  todos.push({
    title: text,
    completed: false,
  });
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }

  renderTodos(todos);
});
*/
/* *** Ejercicio 14: ***/
/*
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

const filters = {
    searchTitle: '',
    showFinished: false,
    showUnfinished: false
}

const toggleTodo = (title) => {
  const todo = todos.find(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (title) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const generateTodoDOM = (todoObj) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todoObj.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todoObj.title);
    renderTodos(todos);
  });

  todoText.textContent = todoObj.title;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todoObj.title);
    renderTodos(todos);
  });

  return todoEl;
};

const createTodo = (text) => {
  todos.push({
    title: text,
    completed: false,
  });
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }

  renderTodos(todos);
});
*/

/* *** Ejercicio 13: ***/
/*
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

const toggleTodo = (title) => {
  const todo = todos.find(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (title) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.title.toLowerCase() === title.toLowerCase()
  );

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const generateTodoDOM = (todoObj) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const todoText = document.createElement("span");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todoObj.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todoObj.title);
    renderTodos(todos);
  });

  todoText.textContent = todoObj.title;
  containerEl.appendChild(todoText);

  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todoObj.title);
    renderTodos(todos);
  });

  return todoEl;
};

const createTodo = (text) => {
  todos.push({
    title: text,
    completed: false,
  });
};

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }

  renderTodos(todos);
});
*/

/* *** Ejercicio 12: ***/
/*
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

const generateTodoDOM = (todoObj) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todoObj.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todoObj.title)
        renderTodos(todos)
    })

    todoText.textContent = todoObj.title
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todoObj.title)
        renderTodos(todos)
    })

    return todoEl
}

const createTodo = (text) => {
    todos.push({
        title: text,
        completed: false
    })
}

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }
 
  renderTodos(todos);
});
*/

/* *** Ejercicio 11: ***/
/*
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
  todoEl.classList.add("list-item");

  const containerEl = document.createElement("div");
  containerEl.classList.add("list-item__container");

  const todoText = document.createElement("span");

  todoText.textContent = todo;
  containerEl.appendChild(todoText);
  todoEl.appendChild(containerEl);

  const removeButton = document.createElement("button");
  removeButton.classList.add("button", "button--text");
  removeButton.textContent = "remove";
  todoEl.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    removeTodo(todoText);
    renderTodos(todos);
  });
    
  return todoEl;
};

const createTodo = (text) => {
    todos.push({
        title: text,
        completed: false
    })
}

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);
    e.target.elements.text.value = "";
  }
 
  renderTodos(todos);
});
*/

/* *** Ejercicio 10: ***/
/*
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
*/

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
