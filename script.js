let colorSelection = document.querySelector('.colorSelection')
let list = document.querySelector('.list')
let addElement = document.querySelector('.addElement')
let addButton = document.querySelector('.addButton')

let currentColor = 'light theme'
colorSelection.onclick = () => {
    let val = colorSelection.options[colorSelection.selectedIndex].value
    if (val == 'light theme' && currentColor == 'dark theme') {
        currentColor = 'light theme'
        colorSelection.style = 'background-color: rgb(246, 234, 218)'
    } else if (val == 'dark theme' && currentColor == 'light theme') {
        currentColor = 'dark theme'
        colorSelection.style = 'background-color: rgb(67, 59, 48)'
        // colorSelection.style = 'color: rgb(246, 234, 218)'
    }
}

