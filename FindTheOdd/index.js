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