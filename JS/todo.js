document.addEventListener("DOMContentLoaded", function () {
    initializeTaskList("todoList", "newTaskInput", "addTaskButton");
    initializeTaskList("weeklyTodoList", "newWeeklyTaskInput", "addWeeklyTaskButton");
    initializeTaskList("longTermTodoList", "newLongTermTaskInput", "addLongTermTaskButton");
});

function initializeTaskList(listId, inputId, addButtonId) {
    loadTasks(listId);

    var addTaskButton = document.getElementById(addButtonId);
    if (addTaskButton) {
        addTaskButton.addEventListener("click", function () {
            addTask(listId, inputId);
        });
    }
}

function loadTasks(listId) {
    var todoList = document.getElementById(listId);
    todoList.innerHTML = ""; // Clear the list before loading

    // Retrieve tasks from storage (assuming you're using localStorage)
    var tasks = JSON.parse(localStorage.getItem(listId)) || [];

    tasks.forEach(function (task, index) {
        addTaskToDOM(listId, task.text, task.done, index);
    });
}

function addTask(listId, inputId) {
    var newTaskInput = document.getElementById(inputId);
    var taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        var tasks = JSON.parse(localStorage.getItem(listId)) || [];
        var newTask = { text: taskText, done: false };
        tasks.push(newTask);

        localStorage.setItem(listId, JSON.stringify(tasks));

        loadTasks(listId); // Display the new task on the page
        newTaskInput.value = ""; // Clear the input field
    }
}

function addTaskToDOM(listId, taskText, isDone, index) {
    var todoList = document.getElementById(listId);
    var newTaskItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isDone;
    checkbox.addEventListener("change", function () {
        updateTaskStatus(listId, newTaskItem, checkbox.checked);
    });

    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        deleteTask(listId, index, newTaskItem);
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

function updateTaskStatus(listId, taskItem, isDone) {
    var taskLabel = taskItem.querySelector("label");
    var tasks = JSON.parse(localStorage.getItem(listId)) || [];
    var index = Array.from(taskItem.parentElement.children).indexOf(taskItem);

    tasks[index].done = isDone;
    localStorage.setItem(listId, JSON.stringify(tasks));

    // Apply or remove strikethrough style based on the task status
    if (isDone) {
        taskLabel.style.textDecoration = "line-through";
    } else {
        taskLabel.style.textDecoration = "none";
    }
}

function deleteTask(listId, index, taskItem) {
    var tasks = JSON.parse(localStorage.getItem(listId)) || [];
    tasks.splice(index, 1); // Remove the task from the array

    localStorage.setItem(listId, JSON.stringify(tasks));
    taskItem.remove(); // Remove the task from the DOM
}
