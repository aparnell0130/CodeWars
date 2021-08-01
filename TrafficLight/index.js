const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const colors = ['yellow', 'red', 'green']
let i = 0
function updateLight(current) {
    let newLight
    //your code here!
    if (current === 'green') {
        newLight = 'yellow'
        yellow.style.background = 'yellow'
        green.style.background = 'black'
        red.style.background = 'black'

    }
    if (current === 'yellow') {
        newLight = 'red'
        red.style.background = 'red'
        yellow.style.background = 'black'
        green.style.background = 'black'
    }
    if (current === 'red') {
        newLight = 'green'

        green.style.background = '#00FF7F'
        yellow.style.background = 'black'
        red.style.background = 'black'

    }
    return newLight
}

function change() {
    updateLight(colors[i]);
    i++;

    if (i > colors.length - 1) {
        i = 0;
    }
}
setInterval(change, 3000);


// console.log(updateLight("green"))
// console.log(updateLight("yellow"))
// console.log(updateLight("red"))