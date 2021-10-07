const decodePass = (passArr, bin) => {
    //initial global variables
    let binString = ''
    let binArr = []

    // for loop to make bin into an array equivalent to bin.split(' ')
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
    // for loop to change binary code to CharCode and get the character using fromCharCode then add it to binString
    // loop through binArr
    for (let i = 0; i < binArr.length; i++) {
        let binary = binArr[i]
        let power = binary.length - 1
        let accumulator = 0

        // loop over binary code
        for (let j = 0; j < binary.length; j++) {
            // convert binary code to CharCode
            accumulator += (+binary[j]) * (2 ** power)
            // subtract 1 from power
            power--
        }
        // add accumulator to binString
        binString += String.fromCharCode(accumulator)
        // reset accumulator to 0
        accumulator = 0
    }
    // for loop to check if binString matches any values in passArr
    for (let i = 0; i < passArr.length; i++) {
        if (passArr[i] === binString) {
            return binString
        }
    }
    return false
}

decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')
decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')
decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011')