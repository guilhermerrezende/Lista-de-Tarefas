document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    
    if (taskText === '') {
        alert('Por favor, adicione uma tarefa.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button>Remover</button>
    `;
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('button').addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);

    document.getElementById('new-task').value = '';
});
