const taskInput = document.getElementById('task')
const button = document.getElementById('btn')
const taskList = document.getElementById('taskList')

button.addEventListener('click',() => {
    const taskText = taskInput.value
    if (taskText === '') return
    const li = document.createElement('li')

    li.innerText = taskText
    
    
    const removerBtn = document.createElement('button')
    removerBtn.textContent = 'Remover'
    removerBtn.style.marginLeft = '10px'
    removerBtn.addEventListener('click', () => {
        taskList.removeChild(li)
        taskList.removeChild(removerBtn)
    })

    
    taskList.appendChild(li)
    taskList.appendChild(removerBtn)
    taskInput.value = ''
})

