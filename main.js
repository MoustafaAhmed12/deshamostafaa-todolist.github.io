// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");

// Events
todoButton.addEventListener("click", addtodoList);
todoList.addEventListener("click", deleteTask);
// Function

// Add Task
function addtodoList(eo) {
    eo.preventDefault();

    if (todoInput.value == "" || todoInput.value === typeof Number) {
        alert("Check your task pls!");
    } else {
        // set display none to the h2
        document.querySelector(".what-task").style.display = "none";

        // Create container-task
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoList.appendChild(todoDiv);

        // Create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // Create container-btn
        const divBtn = document.createElement("div");
        todoDiv.appendChild(divBtn);

        // Create btn check
        divBtn.innerHTML = '<span class="icon-check icon"></span>';

        // Create btn trash
        divBtn.innerHTML += '<span class="icon-trash icon"></span>';

        todoInput.value = "";
        todoInput.focus();
    }
}

function deleteTask(eo) {
    const item = eo.target;
    console.log(item);

    if (item.classList[0] === "icon-trash") {
        const todo = item.parentElement.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if (item.classList[0] === "icon-check") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("complete-task");
    }
}

window.onload = () => {
    todoInput.focus();
};