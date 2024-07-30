document.querySelector('#addTask').addEventListener('click', function () {
    const taskInput = document.querySelector('#taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.querySelector('#taskList');


        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        let taskTextNode = document.createTextNode(taskText);
        listItem.appendChild(taskTextNode);

        const editButton = document.createElement('button');
        const setting = document.createElement('span');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            const editBox = document.createElement("span")
            const editInput = document.createElement('input');
            const saveBtn = document.createElement('button');
            saveBtn.className = "save-btn";
            saveBtn.textContent = "Save";
            editInput.type = 'text';
            editInput.value = taskText;
            editBox.appendChild(editInput);
            editBox.appendChild(saveBtn);
            listItem.replaceChild(editBox, taskTextNode);
            editInput.focus();


            saveBtn.addEventListener('click', function () {
                taskText = editInput.value.trim();
                taskTextNode.nodeValue = taskText

                listItem.replaceChild(taskTextNode, editBox);
            });

        });


        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });


        setting.appendChild(editButton);
        setting.appendChild(removeButton);
        listItem.appendChild(setting)
        taskList.appendChild(listItem);



        taskInput.value = '';
    }
});