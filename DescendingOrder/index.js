const descendingOrder = (n) => {
    return +(n.toString().split('').sort((a, b) => b - a).join(''))
}

const descendingOrderNM = (n) => {
    const strN = n + ''
    let arr = []
    let newN = ''

}


console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(111))
console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))