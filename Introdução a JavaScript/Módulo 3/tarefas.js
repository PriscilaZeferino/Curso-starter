var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [];


function renderTarefas()
{
    listElement.innerHTML = '';
    for(task of tasks)
    {
        var tasksElement = document.createElement('li');
        var taskText = document.createTextNode(task);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')
        
        
        var pos = tasks.indexOf(task);
        linkElement.setAttribute('onclick', 'deleteTask(' + pos + ')');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        tasksElement.appendChild(taskText);
        tasksElement.appendChild(linkElement);

        listElement.appendChild(tasksElement);

    }
}

renderTarefas();

function addTasks()
{
    var taskText = inputElement.value;
    tasks.push(taskText);

    inputElement.value = '';
    renderTarefas();
    saveToStorage()
}

btnElement.onclick = addTasks;

function deleteTask(pos)
{
    tasks.splice(pos, 1);
    renderTarefas();
    saveToStorage()
}

function saveToStorage()
{
    localStorage.setItem('list_tasks', JSON.stringify(tasks));
}