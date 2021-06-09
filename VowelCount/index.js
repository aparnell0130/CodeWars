function getCount(str) {

    let vowelsCount = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            vowelsCount++
        }
    }

    return vowelsCount;
}

getCount("abracadabra") //, 5)
getCount("In The End") //, 3)
getCount("Call Me Maybe") //, 4)