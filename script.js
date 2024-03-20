document.addEventListener('DOMContentLoaded', function() {
    const addTodoLink = document.getElementById('addTodoLink');
    const addTodoForm = document.getElementById('addTodoForm');
    const addTodoButton = document.getElementById('addTodoButton');
    const todosContainer = document.querySelector('.todos');
    const todoForm = document.getElementById('todoForm');

    addTodoLink.addEventListener('click', function(event) {
        event.preventDefault();
        addTodoForm.style.display = 'block';
    });

    addTodoButton.addEventListener('click', function(event) {
        event.preventDefault();
        const formData = getFormData();
        if (formData) {
            renderTodo(formData);
            todoForm.reset(); // Reset the form after submission
            addTodoForm.style.display = 'none'; // Hide the form after submission
        }
    });

    function getFormData() {
        const task = document.getElementById('task').value;
        const time = parseInt(document.getElementById('time').value); // Parse the time as an integer
        const people = document.getElementById('people').value;
        const criteria = document.getElementById('criteria').value;
        
        if (task && !isNaN(time) && people && criteria) { // Check if time is a valid number
            return { task, time, people, criteria };
        } else {
            alert('Please fill out all fields with valid inputs.');
            return null;
        }
    }

//     function renderTodo(todo) {
//         const todoItem = document.createElement('div');
//         todoItem.classList.add('todo-item'); // Add a class name to the todo item
        
//         const todoText = document.createElement('span');
//         todoText.classList.add('todo-text');
//         todoText.textContent = `Task: ${todo.task}, Time: ${todo.time} minutes, People: ${todo.people}, Criteria: ${todo.criteria}`;
      
//         const todoIcons = document.createElement('div');
//         todoIcons.classList.add('todo-icons');

//         const timer = document.createElement('div');
//         timer.classList.add('timer');
//         timer.textContent = `Time Left: ${todo.time} minutes`;
        
//         // Create and append icon elements (You may need to adjust the classes based on your icon library)
      
//         const editIcon = document.createElement('i');
//         editIcon.classList.add('fas', 'fa-edit');
//         todoIcons.appendChild(editIcon);
      
//         const deleteIcon = document.createElement('i');
//         deleteIcon.classList.add('fas', 'fa-trash-alt');
//         todoIcons.appendChild(deleteIcon);
      
//         // Append todo text and icons to the todo item
//         todoItem.appendChild(todoText);
//         todoItem.appendChild(todoIcons);
//         todoItem.appendChild(timer);
        
//         // Append todo item to the todos container
//         todosContainer.appendChild(todoItem);
      
//         // Start countdown timer
//         startCountdown(todoItem, todo.time);
//       }

//     function startCountdown(todoItem, time) {
//         let timerElement = todoItem.querySelector('.timer');
//         let countDown = time * 60; // Convert minutes to seconds

//         const countdownInterval = setInterval(() => {
//             const minutes = Math.floor(countDown / 60);
//             const seconds = countDown % 60;

//             timerElement.textContent = `Time Left: ${minutes}m ${seconds}s`;

//             countDown--;

//             if (countDown < 0) {
//                 clearInterval(countdownInterval);
//                 timerElement.textContent = "Time's up!";
//             }
//         }, 1000); // Update every second
//     }
// });

function renderTodo(todo) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item'); // Add a class name to the todo item
    
    const todoText = document.createElement('span');
    todoText.classList.add('todo-text');
    todoText.textContent = `Task: ${todo.task}, Time: ${todo.time} minutes, People: ${todo.people}, Criteria: ${todo.criteria}`;
  
    const todoIcons = document.createElement('div');
    todoIcons.classList.add('todo-icons');

    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = `Time Left: ${todo.time} minutes`;
    
    // Create and append icon elements (You may need to adjust the classes based on your icon library)
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit');
    todoIcons.appendChild(editIcon);
  
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt');
    todoIcons.appendChild(deleteIcon);
  
    // Append todo text and icons to the todo item
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoIcons);
    todoItem.appendChild(timer);
    
    // Append todo item to the todos container
    todosContainer.appendChild(todoItem);
  
    // Start countdown timer
    startCountdown(todoItem, todo.time);
}

function startCountdown(todoItem, time) {
    let timerElement = todoItem.querySelector('.timer');
    let countDown = time * 60; // Convert minutes to seconds

    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(countDown / 60);
        const seconds = countDown % 60;

        timerElement.textContent = `Time Left: ${minutes}m ${seconds}s`;

        if (countDown <= 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Time's up!";
            todoItem.style.backgroundColor = 'red'; // Change background color to red if time is up
        }

        countDown--;
    }, 1000); // Update every second
}
});
