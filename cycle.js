// "use strict";
const btnAdd = document.getElementById("buttonAdd");
const task = document.getElementById("addTask");
const taskBox = document.getElementsByClassName("taskBox");
const noTasksDiv = document.getElementById("noTasks");

btnAdd.addEventListener("click", function () {
    if (task.value) {
        createGoal();
        task.value = "";
        colorTheCheckmarks();
        noTasksDiv.style.display = "none";
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
    taskCard.appendChild(taskImg);
}

function colorTheCheckmarks() {
    const checkmarks = document.getElementsByClassName("checkmark");
    console.log(checkmarks);

    for (let checkmark of checkmarks) {
        checkmark.addEventListener("click", function (evt) {
            if (!evt.target.style.backgroundColor) {
                evt.target.style.backgroundColor = "#05b308";
                evt.target.style.borderRadius = "50%";
            } else {
                evt.target.style.backgroundColor = "";
            }
        });
    }
}

const btnRemove = document.getElementById("buttonRemove");

btnRemove.addEventListener("click", function () {
    const allTasks = document.getElementsByClassName("task");
    for (let oneTask of allTasks) {
        oneTask.remove();
    }
    noTasksDiv.style.display = "block";
});

// function checkTasks() {
//     let allTasks = document.getElementsByClassName("task");
//     if (allTasks.length >= 1) {
//         btnRemove.setAttribute("disabled", "true");
//         btnRemove.style.backgroundColor = "#8d9ab0";
//     } else if ((allTasks.length = 0)) {
//         btnRemove.removeAttribute("disabled");
//         btnRemove.style.backgroundColor = "rgb(68, 161, 218)";
//     }
// }

//не работают иконки когда больше 1 задачи, не работает кнопка удалить когда больше 1 задачи
