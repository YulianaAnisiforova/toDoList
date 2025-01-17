let colorSelection = document.querySelector('.colorSelection')
let list = document.querySelector('.list')
let addElement = document.querySelector('.addElement')
let addButton = document.querySelector('.addButton')
let mainBack = document.body
let task = null
let isCompleted = false

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
    }
});

updateList(count)

function updateList (count) {
    for (let i = 0; i < tasks.length; i++) {
        if (i == count)
            list.innerHTML += "<p class='task'>" + tasks[i] + ' ' + "</p>"
    }
    task = document.querySelector('.task')
}

addButton.onclick = () => {
    let val = addElement.value
    tasks.push(val)
    count++

    updateList(count)

    addElement.value = null
}

task.addEventListener("dblclick", (event) => {
    task.style.textDecoration = 'line-through'
});
