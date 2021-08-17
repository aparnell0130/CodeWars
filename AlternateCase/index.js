const input = document.getElementById('inputBox')
const button = document.querySelector('#case')
const alternatedCase = document.querySelector('.alternatedCases')
console.log(input);

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

const changeText = (e) => {
    e.preventDefault()
    const inputValue = input.value
    alternatedCase.textContent = inputValue.toAlternateCase()
}

button.addEventListener('click', changeText)
console.log('HelLo WoRLd'.toAlternateCase())