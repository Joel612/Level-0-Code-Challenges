function findingVowels(str) {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  const presentvowel = [];

  for (let i = 0; i < vowelsArray.length; i++) {
    if (str.toLowerCase().includes(vowelsArray[i])) {
      presentvowel.push(vowelsArray[i]);
    }
  }
  console.log("Vowels:",presentvowel);
}

findingVowels("UmuziUmuzi");;
