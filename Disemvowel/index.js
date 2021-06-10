function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            newStr += str[i]
        }
    }
    return newStr;
}


disemvowel("This website is for losers LOL!") //, "Ths wbst s fr lsrs LL!")
disemvowel("No offense but,\nYour writing is among the worst I've ever read") //, "N ffns bt, Yr wrtng s mng th wrst 'v vr rd"
disemvowel("What are you, a communist?") //, "Wht r y,  cmmnst?")