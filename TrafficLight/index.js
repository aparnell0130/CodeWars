function updateLight(current) {
    let newLight
    //your code here!
    if (current === 'green') {
        newLight = 'yellow'
    }
    if (current === 'yellow') {
        newLight = 'red'
    }
    if (current === 'red') {
        newLight = 'green'
    }
    return newLight
}


console.log(updateLight("green"))
console.log(updateLight("yellow"))
console.log(updateLight("red"))