String.prototype.toAlternateCase = function () {
    let newString = '';
    const letters = Object.values(this)
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newString += letters[i].toUpperCase()
        } else if (letters[i] === letters[i].toUpperCase()) {
            newString += letters[i].toLowerCase()
        }
    }
    return newString
}

console.log('HelLo WoRLd'.toAlternateCase())