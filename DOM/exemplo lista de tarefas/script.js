const taskInput = document.getElementById('task')
const button = document.getElementById('btn')
const taskList = document.getElementById('taskList')
const filterInput = document.getElementById('filterInput')


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
    li.appendChild(removerBtn)
    taskInput.value = ''
})

filterInput.addEventListener('input', () => {
    const filtertext = filterInput.value.toLowerCase()
    const tasks = taskList.querySelectorAll('li')

    tasks.forEach((task) => {
        const taskName = task.firstChild.textContent.toLowerCase()
        
        if (taskName.includes(filtertext)){
            task.classList.remove('hidden')
        }
        else{
            task.classList.add('hidden')
        }
        
    });
    

})

