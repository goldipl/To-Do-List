const actionForm = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
const listItems = document.getElementsByClassName('liTask');
const input = document.querySelector('input');


const deleteTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

taskNumber.textContent = "0";

const addTask = (e) => {
    e.preventDefault() // prevent preloading page
    const mainTask = input.value;
    if (mainTask === "") {
        return;
    } else {
        const liTask = document.createElement('li');
        liTask.className = 'liTask';
        liTask.innerHTML = mainTask + "<button class='deleteBtn'>Skasuj</button>";
        ul.appendChild(liTask);
        input.value = "";
        taskNumber.textContent = listItems.length;
        liTask.querySelector('button').addEventListener('click', deleteTask);
    }
}

actionForm.addEventListener('submit', addTask);