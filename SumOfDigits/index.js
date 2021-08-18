const digitalRoot = (n) => {
    let sum = 0
    let newNum = n.toString()
    for (let i = 0; i < newNum.length; i++) {
        sum += newNum[i]
    }
    if (sum < 10) {
        return sum
    }
    return digitalRoot(sum)
}