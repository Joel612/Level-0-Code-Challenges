const findingVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    var letters = str.split('');
    var vowelsFound = []

    for (var i in letters) {
        if (vowels.includes(letters[i])) {
            vowelsFound.push(letters[i]);
        }
    }
    
    console.log("Vowels:", vowelsFound.join(","));
}

var str = "ILoveCoding";
findingVowels(str);