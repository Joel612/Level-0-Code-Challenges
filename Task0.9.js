function findingVowels(str) {
  var vowelsArray = ["a", "e", "i", "o", "u"];
  var presentvowel = [];

  for (let i = 0; i < vowelsArray.length; i++) {
    if (str.toLowerCase().includes(vowelsArray[i])) {
      presentvowel.push(vowelsArray[i]);
    }
  }
  console.log("Vowels:",presentvowel);
}

findingVowels("UmuziUmuzi");
