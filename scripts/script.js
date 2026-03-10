const userInput = document.querySelector('.todo__input');
const tasks = document.querySelector('.todo__items');
const completedTasks = document.querySelector('.todo__items-completed');
const addTaskBtn = document.querySelector('.todo__btn');
const currentTasksCount = document.querySelector('.todo__count');
const completedTasksCount = document.querySelector('.todo__count-completed');

let completeBtn;
let deleteBtn;


addTaskBtn.onclick = ()=>{
    let newTask = document.createElement('div');
    newTask.className = 'todo__item';
    
    let taskText = document.createElement('p');
    taskText.className = 'todo__item-text';
    taskText.textContent = userInput.value;

    let btnsBox = document.createElement('div');
    btnsBox.className = 'todo__btns';

    completeBtn = document.createElement('img');
    completeBtn.className = 'todo__complete';
    completeBtn.src = '../img/Complete.svg';

    deleteBtn = document.createElement('img');
    deleteBtn.className = 'todo__delete';
    deleteBtn.src = '../img/Deleter.svg';

    tasks.appendChild(newTask);
    newTask.appendChild(taskText);
    newTask.appendChild(btnsBox);
    btnsBox.appendChild(completeBtn);
    btnsBox.appendChild(deleteBtn);

    currentTasksCount.textContent = tasks.childElementCount;

    userInput.value = '';

    if(currentTasksCount.textContent > 0){


    completeBtn.addEventListener('click', (e)=>{
        console.log(e.target.parentElement.parentElement);
        tasks.removeChild(e.target.parentElement.parentElement);
        completedTasks.appendChild(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.className = 'todo__item-completed';
        e.target.parentElement.previousElementSibling.className = 'todo__item-completed--text';
        e.target.parentElement.remove();
        completedTasksCount.textContent = completedTasks.childElementCount;
    })

    deleteBtn.addEventListener('click', (e)=>{
        e.target.parentElement.parentElement.remove();
    })
}

}

