const descendingOrder = (n) => {
    return +(n.toString().split('').sort((a, b) => b - a).join(''))
}

const descendingOrderNM = (n) => {
    const strN = n + ''
    let arr = []
    let newN = ''

    for (let i = 0; i < strN.length; i++) {
        arr[arr.length] = strN[i]
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        newN += arr[i]
    }
}


console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(111))
console.log(descendingOrder(15))
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))