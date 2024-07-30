document.getElementById('addTask').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');


        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.textContent = taskText;


        const removeButton = document.createElement('span');
        removeButton.className = 'remove-btn';
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);


        taskInput.value = '';
    }
});