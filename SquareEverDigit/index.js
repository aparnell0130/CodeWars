const squareDigits = (num) => {
    const numString = num.toString()
    let squaredNum = ''
    for (let i = 0; i < numString.length; i++) {
        squaredNum += numString[i] * numString[i]
    }
    return parseInt(squaredNum)
}

console.log(squareDigits(9119));
console.log(squareDigits(2112));
console.log(squareDigits(3212));
console.log(squareDigits(0));