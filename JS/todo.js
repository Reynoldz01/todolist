document.addEventListener("DOMContentLoaded", function () {
    loadTasks();

    var addTaskButton = document.getElementById("addTaskButton");
    if (addTaskButton) {
        addTaskButton.addEventListener("click", addTask);
    }
});

function loadTasks() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear the list before loading

    // Retrieve tasks from storage (assuming you're using localStorage)
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task, index) {
        addTaskToDOM(task.text, task.done, index);
    });
}

function addTask() {
    var newTaskInput = document.getElementById("newTaskInput");
    var taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        var newTask = { text: taskText, done: false };
        tasks.push(newTask);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        addTaskToDOM(taskText, false, tasks.length - 1); // Display the new task on the page
        newTaskInput.value = ""; // Clear the input field
    }
}

function addTaskToDOM(taskText, isDone, index) {
    var todoList = document.getElementById("todoList");
    var newTaskItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isDone;
    checkbox.addEventListener("change", function () {
        updateTaskStatus(newTaskItem, checkbox.checked);
    });

    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(index, newTaskItem);
    });

    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(taskLabel);
    newTaskItem.appendChild(deleteButton);
    todoList.appendChild(newTaskItem);

    // Apply strikethrough style if the task is marked as done
    if (isDone) {
        taskLabel.style.textDecoration = "line-through";
    }
}

function updateTaskStatus(taskItem, isDone) {
    var taskLabel = taskItem.querySelector("label");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var index = Array.from(taskItem.parentElement.children).indexOf(taskItem);

    tasks[index].done = isDone;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Apply or remove strikethrough style based on the task status
    if (isDone) {
        taskLabel.style.textDecoration = "line-through";
    } else {
        taskLabel.style.textDecoration = "none";
    }
}

function deleteTask(index, taskItem) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1); // Remove the task from the array

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskItem.remove(); // Remove the task from the DOM
}
document.addEventListener("DOMContentLoaded", function () {
    loadTasks();

    var addTaskButton = document.getElementById("addTaskButton");
    if (addTaskButton) {
        addTaskButton.addEventListener("click", addTask);
    }
});

function loadTasks() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear the list before loading

    // Retrieve tasks from storage (assuming you're using localStorage)
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task, index) {
        addTaskToDOM(task.text, task.done, index);
    });
}

function addTask() {
    var newTaskInput = document.getElementById("newTaskInput");
    var taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        var newTask = { text: taskText, done: false };
        tasks.push(newTask);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        addTaskToDOM(taskText, false, tasks.length - 1); // Display the new task on the page
        newTaskInput.value = ""; // Clear the input field
    }
}

function addTaskToDOM(taskText, isDone, index) {
    var todoList = document.getElementById("todoList");
    var newTaskItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isDone;
    checkbox.addEventListener("change", function () {
        updateTaskStatus(newTaskItem, checkbox.checked);
    });

    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(index, newTaskItem);
    });

    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(taskLabel);
    newTaskItem.appendChild(deleteButton);
    todoList.appendChild(newTaskItem);

    // Apply strikethrough style if the task is marked as done
    if (isDone) {
        taskLabel.style.textDecoration = "line-through";
    }
}

function updateTaskStatus(taskItem, isDone) {
    var taskLabel = taskItem.querySelector("label");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var index = Array.from(taskItem.parentElement.children).indexOf(taskItem);

    tasks[index].done = isDone;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Apply or remove strikethrough style based on the task status
    if (isDone) {
        taskLabel.style.textDecoration = "line-through";
    } else {
        taskLabel.style.textDecoration = "none";
    }
}

function deleteTask(index, taskItem) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1); // Remove the task from the array

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskItem.remove(); // Remove the task from the DOM
}
