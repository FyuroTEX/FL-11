let rootNode = document.getElementById('root').addEventListener('click', checkListItems);
let addButton = document.querySelector('.addTodo').addEventListener('click', addTask);
let inputTask = document.getElementById('newTodo');
let taskList = document.getElementById('todoList');
let message = document.querySelector('.message');


function checkListItems() {
    let todoItems = document.querySelectorAll('li');
    const maxTodo = 10;

    if (todoItems.length === maxTodo) {
        inputTask.disabled = true;
        message.innerHTML = 'Maximum item per list are created';
    } else {
        inputTask.disabled = false;
        message.innerHTML = '';
    }
}

function createNewElement(value) {
    let li = document.createElement('li');
    li.setAttribute('class', 'todoItem');
    let id = new Date().valueOf();
    li.setAttribute('id', id);
    li.setAttribute('draggable', 'true');
    let checkboxBtn = document.createElement('button');
    checkboxBtn.setAttribute('class', 'btn checkbox');
    li.appendChild(checkboxBtn);
    let checkboxIcon = document.createElement('i');
    checkboxIcon.setAttribute('class', 'material-icons');
    checkboxIcon.innerHTML = 'check_box_outline_blank';
    checkboxBtn.appendChild(checkboxIcon);
    let label = document.createElement('label');
    label.innerHTML = value;
    li.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    li.appendChild(input);
    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn edit');
    li.appendChild(btnEdit);
    let editIcon = document.createElement('i');
    editIcon.setAttribute('class', 'material-icons');
    editIcon.innerHTML = 'edit';
    btnEdit.appendChild(editIcon);
    let btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'btn delete');
    li.appendChild(btnDelete);
    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'material-icons');
    deleteIcon.innerHTML = 'delete';
    btnDelete.appendChild(deleteIcon);


    li.addEventListener('dragstart', dragStart);
    li.addEventListener('dragover', dragOver);
    li.addEventListener('drop', dragDrop);
    li.addEventListener('dragend', dragEnd);

    return li;
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