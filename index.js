function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskText;
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  
  function clearTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  }
  