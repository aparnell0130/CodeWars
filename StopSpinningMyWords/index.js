const spinWords = (string) => {

    let arr = []
    let tmpStr = ''
    let newStr = ''
    let result = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            tmpStr += string[i]
        } else {
            arr[arr.length] = tmpStr
            tmpStr = ''
        }
    }
    if (tmpStr) {
        arr[arr.length] = tmpStr
    }

    for (let j = 0; j < arr.length; j++) {
        const word = arr[j]
        let str = ''
        if (arr[j].length < 5) {
            newStr += arr[j]
        } else {
            for (let k = word.length - 1; k >= 0; k--) {
                str += word[k]
            }
        }
        newStr += str + ' '
    }

    for (let s = 0; s < newStr.length - 1; s++) {
        result += newStr[s]
    }
    return result
}

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("Seriously this is the last one"))