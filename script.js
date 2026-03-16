
function addTask(){

    let inputBox = document.getElementById("taskInput");
    let taskValue = inputBox.value;

    if(taskValue.trim() === ""){
        alert("Please type a task first");
        return;
    }

    let newItem = document.createElement("li");
    newItem.textContent = taskValue;

    let taskArea = document.getElementById("taskList");
    taskArea.appendChild(newItem);

    inputBox.value = "";


}