const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

function updateLight(current) {
    let newLight
    //your code here!
    if (current === 'green') {
        newLight = 'yellow'
        yellow.style.background = 'yellow'
    }
    if (current === 'yellow') {
        newLight = 'red'
        red.style.background = 'red'
    }
    if (current === 'red') {
        newLight = 'green'
        green.style.background = '#00FF7F'
    }
    return newLight
}

updateLight('yellow')
// console.log(updateLight("green"))
// console.log(updateLight("yellow"))
// console.log(updateLight("red"))