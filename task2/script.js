const taskForm = document.getElementById('new-task-form');
const taskList = document.getElementById('tasks');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    const labels = document.getElementById('labels').value.split(',');

    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
        <h3>${taskName}</h3>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Labels:</strong> ${labels.join(', ')}</p>
    `;

    taskList.appendChild(taskElement);

    taskForm.reset();
});
