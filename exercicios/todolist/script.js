function addTask() {
    var taskInput = document.getElementById("taskInput")
    var taskList = document.getElementById("taskList")

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li")
        li.textContent = taskInput.value;
        var deleteButton = document.createElement("button")
        deleteButton.textContent = "❌"
        deleteButton.onclick = function() {
            taskList.removeChild(li)
        };
        li.appendChild(deleteButton)
        taskList.appendChild(li)
        taskInput.value = ""
    }
}