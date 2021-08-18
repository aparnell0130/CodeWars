const squareDigits = (num) => {
    const numString = num.toString()
    let squaredNum = ''
    for (let i = 0; i < numString.length; i++) {
        squaredNum += numString[i] * numString[i]
    }
    return parseInt(squaredNum)
}