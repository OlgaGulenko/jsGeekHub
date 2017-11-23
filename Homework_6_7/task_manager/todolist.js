var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
};
var todoList = JSON.parse(localStorage.getItem('items') || '[]');
var input = document.getElementById('input');
var list = document.getElementById('list');

if (todoList) {
  taskList();
};

function taskList() {
    todoList.forEach(function (element, i) {
        var div = document.createElement('div');
        var h1 = document.createElement('h1');
        var deleteBtn = document.createElement('button');//1
        var editBtn = document.createElement('button');//2
        var date = document.createElement('date');
        div.setAttribute('id', i);
        div.setAttribute('done', element.done);
        h1.setAttribute('id', 'taskname');
        h1.setAttribute('class', 'taskname');
        date.innerText = element.date;
        h1.innerText = element.text;
        div.append(h1);
        editBtn.innerText = 'Edit';
        deleteBtn.innerText = 'Delete';
        div.setAttribute('class', 'task');
        h1.setAttribute('data', 'drag-helper');
        div.append(editBtn);
        div.append(deleteBtn);
        div.append(date);
        list.append(div);
        var box = document.createElement('input');
        box.setAttribute('type', 'checkbox');
        box.setAttribute('class', 'checkBox');
        h1.appendChild(box);
        // console.log(list);
        box.onclick = function () {
            if(box.checked){
                h1.style.textDecoration = "line-through";
            }else{
                h1.style.textDecoration = "";
            }
        }
        h1.onclick = function (){

          jQuery('#taskname').on('mousedown', function (event){
            var clone = jQuery(event.currentTarget).clone();
            clone.appendTo(document.body);

          });
        }
        deleteBtn.onclick = function (e) {
          // debugger;
            e.target.parentNode.remove();
            // todoList.splice(todoList.indexOf(e.target.parentNode.id), 1);
            // localStorage.setItem('items', JSON.stringify(todoList));
            todoList.splice(parseInt(e.target.parentNode.id), 1);
            localStorage.setItem('items', JSON.stringify(todoList));
            window.location.reload();
        };
        editBtn.onclick = function (e) {
            var editBlock = document.createElement('div');
            var input = document.createElement('input');
            var editId = e.target.parentNode.id;
            var saveBtn = document.createElement('button');
            input.setAttribute('class', 'input');
            editBlock.setAttribute('class', 'editblock');
            input.value = e.target.parentNode.childNodes[0].innerText;
            saveBtn.innerText = 'Save';
            editBlock.append(input);
            editBlock.append(saveBtn);
            list.replaceChild(editBlock, e.target.parentNode);
            saveBtn.onclick = function () {
                e.target.parentNode.childNodes[0].innerText = input.value;
                list.replaceChild(e.target.parentNode, editBlock);
                todoList[editId].text = input.value;
                localStorage.setItem('items', JSON.stringify(todoList));
            };
        };
    })
}


function render(items){
  //the code will be here
}

function addTask() {
  if (!input.value) {
    alert('Can not be empty');
    return;
  }

  if (!todoList) {
      todoList = [];
  }
  var todo = {
      text: input.value,
      date: new Date().toLocaleString("ru", options),
    };
    // debugger;
  todoList.push(todo);
  localStorage.setItem('items', JSON.stringify(todoList));
  window.location.reload();
}

function reverse() {
    todoList.reverse();
    localStorage.setItem('items', JSON.stringify(todoList));
    window.location.reload();
}

var button = document.getElementById('button');
var reverseButton = document.getElementById('reverseButton');
reverseButton.addEventListener('click', reverse);
button.addEventListener('click', addTask);
