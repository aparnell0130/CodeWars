function findOdd(A) {
    //happy coding!
    let odd = 0
    const trans = A.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0
        }
        obj[item]++
        return obj
    }, {})

    const transVals = Object.values(trans)
    const transKeys = Object.keys(trans)

    for (let i = 0; i < transVals.length; i++) {
        if (!(transVals[i] % 2 === 0)) {
            odd = parseInt(transKeys[i])
        }
    }
    return odd
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
