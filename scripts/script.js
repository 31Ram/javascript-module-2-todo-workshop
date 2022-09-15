/*
 Ejercicio I:
 Abrir y ejecutar los archivos de la carpeta JavaScript-Module-II
*/

/*
 Ejercicio II:
 let element= document.querySelector("#create");
 console.log(element);
*/

/* 
 Ejercicio III:
 let element = document.querySelector("#create");
 element.style.backgroundColor = "green";
*/

/* 
 Ejercicio IV:
 document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log(text)
 })
 */

/* 
 Ejercicio V:

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