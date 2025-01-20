let colorSelection = document.querySelector('.colorSelection')
let list = document.querySelector('.list')
let addElement = document.querySelector('.addElement')
let addButton = document.querySelector('.addButton')
let deleteButton = document.querySelector('.deleteButton')
let cleanButton = document.querySelector('.cleanButton')
let mainBack = document.body
let tip = document.querySelector('.tip')
let task = []
let tasks = ['to wake up at 7:30']
let count = 0

colorSelection.addEventListener("change", (event) => {
    let val = colorSelection.options[colorSelection.selectedIndex].value
    if (val == 'light theme') {
        colorSelection.style.background = 'rgb(246, 234, 218)'
        colorSelection.style.color = 'rgb(67, 59, 48)'
        colorSelection.style.border = '1px solid rgb(67, 59, 48)'

        mainBack.style.background = 'rgb(246, 234, 218)'

        addButton.style.background = 'rgb(67, 59, 48)'
        addButton.style.color = 'rgb(253, 249, 244)'

        list.style.background = 'rgb(253, 249, 244)'

        addElement.style.background = 'rgb(253, 249, 244)'
        addElement.style.border = '1px solid rgb(67, 59, 48)'

        deleteButton.style.background = 'rgb(67, 59, 48)'
        deleteButton.style.color = 'rgb(253, 249, 244)'

        cleanButton.style.background = 'rgb(67, 59, 48)'
        cleanButton.style.color = 'rgb(253, 249, 244)'

        tip.style.color = 'rgb(67, 59, 48)'

    } else if (val == 'dark theme') {
        colorSelection.style.background = 'rgb(67, 59, 48)'
        colorSelection.style.color = 'rgb(246, 234, 218)'
        colorSelection.style.border = '1px solid rgb(246, 234, 218)'

        mainBack.style.background = 'rgb(67, 59, 48)'

        addButton.style.background = 'rgb(246, 234, 218)'
        addButton.style.color = 'rgb(67, 59, 48)'

        list.style.background = 'rgb(208, 186, 158)'

        addElement.style.background = 'rgb(241, 218, 187'
        addElement.style.border = '1px solid rgb(246, 234, 218)'

        tip.style.color = 'rgb(246, 234, 218)'

        deleteButton.style.background = 'rgb(246, 234, 218)'
        deleteButton.style.color = 'rgb(67, 59, 48)'

        cleanButton.style.background = 'rgb(246, 234, 218)'
        cleanButton.style.color = 'rgb(67, 59, 48)'
    }
});


let updateList = (count) => {
    for (let i = 0; i < tasks.length; i++) {
        if (i == count) {
            list.innerHTML += `<p id="${i}">` + tasks[i] + ' ' + "</p>"
            task.push(document.getElementById(i))
        }
    }
// task = document.querySelector('.task')
}

updateList(count)

let updateDeletedTask = (i) => {
    // task[i].remove()
    document.getElementById(i).remove();
}

addButton.onclick = () => {
    let val = addElement.value
    tasks.push(val)
    count++

    updateList(count)

    addElement.value = null
}

list.addEventListener("dblclick", (event) => {
    list.style.textDecoration = 'line-through'
});

deleteButton.onclick = () => {
    tasks.splice(0, 1)
    count--
    updateDeletedTask(0)
}

cleanButton.onclick = () => {
    let tasksLength = tasks.length
    for (let i = 0; i < tasksLength; i++) {
        tasks.pop()
        updateDeletedTask(i)
    }
    count = 0
}