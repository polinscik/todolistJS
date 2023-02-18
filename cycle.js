// "use strict";
const btnAdd = document.getElementById("buttonAdd");
const task = document.getElementById("addTask");
const taskBox = document.getElementsByClassName("taskBox");
const noTasksDiv = document.getElementById("noTasks");

btnAdd.addEventListener("click", function () {
    if (task.value) {
        createGoal();
        task.value = "";
        noTasksDiv.style.display = "none";
        checkTasks();
    }
});

function createGoal() {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task");
    taskBox[0].appendChild(taskCard);

    const taskText = document.createElement("p");
    taskText.classList.add("task__text");
    taskText.textContent = task.value;
    taskCard.appendChild(taskText);

    const taskImg = document.createElement("img");
    taskImg.classList.add("checkmark");
    taskImg.setAttribute("src", "/assets/images/check.svg");
    colorTheCheckmark(taskImg);
    taskCard.appendChild(taskImg);
}

function colorTheCheckmark(el) {
    el.addEventListener("click", function (evt) {
        if (!evt.target.style.backgroundColor) {
            evt.target.style.backgroundColor = "#05b308";
            evt.target.style.borderRadius = "50%";
        } else {
            evt.target.style.backgroundColor = "";
        }
    });
}

const btnRemove = document.getElementById("buttonRemove");

//кнопка очистить список задач
btnRemove.addEventListener("click", function () {
    const allTasks = document.querySelectorAll(".task");
    for (const task1 of allTasks) {
        task1.remove();
    }
    noTasksDiv.style.display = "block";
    checkTasks();
});

function checkTasks() {
    const allTasks = document.querySelectorAll(".task");
    if (allTasks.length == 0) {
        btnRemove.setAttribute("disabled", "true");
        btnRemove.style.backgroundColor = "#8d9ab0";
    } else if (allTasks.length > 0) {
        btnRemove.removeAttribute("disabled");
        btnRemove.style.backgroundColor = "rgb(68, 161, 218)";
    }
}
checkTasks();
