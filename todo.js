// Get elements
const input = document.getElementById('todoInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

// Add task when button clicked or Enter pressed
btn.onclick = addTask;
input.onkeypress = function(e) {
    if (e.key === 'Enter') addTask();
};

function addTask() {
    if (!input.value.trim()) return;
    
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `${input.value}<button>X</button>`;
    
    li.firstChild.onclick = function() { li.classList.toggle('completed'); };
    li.lastChild.onclick = function() { li.remove(); };
    
    list.appendChild(li);
    input.value = '';
}
