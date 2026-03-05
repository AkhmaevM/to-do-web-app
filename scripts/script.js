const userInput = document.querySelector('.todo__input');
const tasks = document.querySelector('.todo__items');
const addTaskBtn = document.querySelector('.todo__btn');


addTaskBtn.onclick = ()=>{
    let newTask = document.createElement('div');
    newTask.className = 'todo__item';
    
    let taskText = document.createElement('p');
    taskText.className = 'todo__item-text';
    taskText.textContent = userInput.value;

    let btnsBox = document.createElement('div');
    btnsBox.className = 'todo__btns';

    let completeBtn = document.createElement('img');
    completeBtn.className = 'todo__complete';
    completeBtn.src = '../img/Complete.svg';

    let deleteBtn = document.createElement('img');
    deleteBtn.className = 'todo__delete';
    deleteBtn.src = '../img/Deleter.svg';

    tasks.appendChild(newTask);
    newTask.appendChild(taskText);
    newTask.appendChild(btnsBox);
    btnsBox.appendChild(completeBtn);
    btnsBox.appendChild(deleteBtn);

}