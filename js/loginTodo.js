// Login

const nickname = document.getElementById("login");
const loginForm = document.getElementById("loginForm");
const NICKNAME = "nickname";
const todoBox = document.querySelector(".todoBox");

function paintNickname(userNickname){
    nickname.innerText = `Welcome! ${userNickname}`;
    loginForm.remove();
    todoBox.classList.remove("hide");
}

function loginFormhandler(event){
    event.preventDefault();
    const userNickname = event.target.nickname.value;
    localStorage.setItem(NICKNAME, userNickname);
    paintNickname(userNickname);
}

loginForm.addEventListener("submit", loginFormhandler);

const userNickname = localStorage.getItem(NICKNAME);
if(!(userNickname === null)){
    paintNickname(userNickname);
}else {
    todoBox.classList.add("hide");
}

console.log((userNickname === null));

// TodoList

const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const SAVETODOS = "saveTodos";

let saveTodos = [];


function saveTodoList(){
    localStorage.setItem(SAVETODOS, JSON.stringify(saveTodos));
}

function deleteElement(event){
    const li = event.target.parentElement;
    saveTodos = saveTodos.filter(todo => !(todo.id === parseInt(li.id)));
    saveTodoList();
    li.remove();
}

function paintTodo(userTodo){
    const addTodo = document.createElement("li");
    addTodo.id = userTodo.id;
    addTodo.innerText = userTodo.todo;
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteElement);
    deleteBtn.innerText = "X";
    addTodo.appendChild(deleteBtn);
    todoList.appendChild(addTodo);
}

function todoFormHandler(event){
    event.preventDefault();
    const todo = event.target.todo.value;
    const userTodo = {
        todo : todo,
        id : Date.now()
    }
    saveTodos.push(userTodo);
    paintTodo(userTodo);
    saveTodoList(userTodo);
    event.target.todo.value = "";
}

todoForm.addEventListener("submit", todoFormHandler);



const savedTodoList = JSON.parse(localStorage.getItem(SAVETODOS));

if(!(savedTodoList === null)){
    saveTodos = savedTodoList;
    saveTodos.forEach(paintTodo);
}