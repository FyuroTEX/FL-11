let rootNode = document.getElementById('root').addEventListener('click', checkListItems);
let addButton = document.querySelector('.addTodo').addEventListener('click', addTask);
let inputTask = document.getElementById('newTodo');
let taskList = document.getElementById('todoList');
let message = document.querySelector('.message');


function checkListItems() {
    let listItems = document.querySelectorAll('li');
    const maxNumOfListItems = 10;

    if (listItems.length === maxNumOfListItems) {
        inputTask.disabled = true;
        message.innerHTML = 'Maximum item per list are created';
    } else {
        inputTask.disabled = false;
        message.innerHTML = '';
    }
}

function createNewElement(task) {
    let id = new Date().valueOf();
    let listItem = document.createElement('li');
    listItem.className = 'todoItem';
    listItem.setAttribute('draggable', 'true');
    listItem.setAttribute('id', id);

    let checkbox = document.createElement('button');
    checkbox.className = 'btn checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';

    let label = document.createElement('label');
    label.innerHTML = task;

    let input = document.createElement('input');
    input.type = 'text';

    let editButton = document.createElement('button');
    editButton.className = 'btn edit';
    editButton.innerHTML = '<i class="material-icons">edit</i>';

    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn delete';
    deleteButton.innerHTML = '<i class="material-icons">delete</i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    listItem.addEventListener('dragstart', dragStart);
    listItem.addEventListener('dragover', dragOver);
    listItem.addEventListener('drop', dragDrop);
    listItem.addEventListener('dragend', dragEnd);

    return listItem;
}


function addTask() {
    if (inputTask.value) {
        let listItem = createNewElement(inputTask.value);
        taskList.appendChild(listItem);
        bindTaskEvents(listItem);
        inputTask.value = '';
    }
}


function finishTask() {
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    let label = listItem.querySelector('label');
    let editButton = listItem.querySelector('button.edit');

    checkbox.className = 'btn checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box</i>';
    label.className = 'strikethrough';
    editButton.disabled = true;
}


function editTask() {
    let listItem = this.parentNode;
    let editButton = this;
    let label = listItem.querySelector('label');
    let input = listItem.querySelector('input[type="text"]');
    let containsClass = listItem.classList.contains('editNow');

    if (containsClass) {
        label.innerHTML = input.value;
        editButton.className = 'btn edit';
        editButton.innerHTML = '<i class="material-icons">edit</i>';
    } else {
        input.value = label.innerText;
        editButton.className = 'btn save';
        editButton.innerHTML = '<i class="material-icons">save</i>';
    }

    listItem.classList.toggle('editNow');
}


function deleteTask(e) {
    let item = e.target;
    item.parentNode.parentNode.remove();
}


function bindTaskEvents(listItem) {
    let checkbox = listItem.querySelector('button.checkbox');
    let editButton = listItem.querySelector('button.edit');
    let deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = finishTask;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}

let dragSrcEl = null;

function dragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
    dragSrcEl = this;
    this.style.opacity = '0.4';
}

function dragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    event.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
    }

    return false;
}

function dragEnd() {
    this.style.opacity = '1';
}