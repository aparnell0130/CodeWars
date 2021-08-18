const digitalRoot = (n) => {
    let sum = 0
    let newNum = n.toString()
    for (let i = 0; i < newNum.length; i++) {
        sum += parseInt(newNum[i])
    }
    if (sum < 10) {
        return sum
    }
    return digitalRoot(sum)
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));