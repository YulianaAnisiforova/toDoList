let colorSelection = document/querySelector('.colorSelection')
let list = document.querySelector('.list')
let addElement = document.querySelector('.addElement')
let addButton = document.querySelector('.addButton')

colorSelection.onclick = () => {
    let val = colorSelection[colorSelection.selectedIndex].value
    if (val == 'light theme') {
        colorSelection.style = 'background-color: rgb(246, 234, 218)'
    } else {
        colorSelection.style = 'background-color: rgb(67, 59, 48)'
    }
}
