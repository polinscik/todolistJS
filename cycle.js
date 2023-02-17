// "use strict";
const btnAdd = document.getElementById("buttonAdd");
const task = document.getElementById("addTask");
const taskBox = document.getElementsByClassName("taskBox");
const noTasksDiv = document.getElementById("noTasks");

const btnRemove = document.getElementById("buttonRemove");

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

const checkmarks = document.getElementsByClassName("checkmark");

function colorTheCheckmarks() {
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

btnRemove.addEventListener("click", function () {
    let allTasks = document.getElementsByClassName("task");
    for (let oneTask of allTasks) {
        oneTask.remove();
    }
    noTasksDiv.style.display = "block";
});
