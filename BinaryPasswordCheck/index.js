const decodePass = (passArr, bin) => {
    //initial global variables
    let binString = ''
    let binArr = []
    let arr = []

    // for loop to make bin into and array equivalent to bin.split(' ')
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] !== ' ') {
            // add bin[i] to binString
            binString += bin[i]
        } else {
            // equivalent to binArr.push(binString)
            binArr[binArr.length] = binString
            // clear binString
            binString = ''
        }
    }
    // if binString not clear push into binArr then clear bin string
    if (binString) {
        binArr[binArr.length] = binString
        binString = ''
    }

}