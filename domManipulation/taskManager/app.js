
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskValue = taskInput.value;

    const listItem = document.createElement("li");
    listItem.innerText = taskValue;

    taskList.append(listItem);
    taskInput.value = "";
}


function searchTask(){
    const taskList = document.querySelectorAll("ul#taskList li")
    const taskInput = document.getElementById("searchInput")
    const searchValue = taskInput.value.toLowerCase();
    
    taskList.forEach((item) => {
        if(searchValue.trim() === ""){
            item.style.backgroundColor = "white";
            item.style.color = 'black';
            return;
        } 
        const match = item.innerText.toLowerCase().includes(searchValue);
        item.style.backgroundColor = match ? "green" : "white";
        item.style.color = match ? "white" : "black";
    })
}



