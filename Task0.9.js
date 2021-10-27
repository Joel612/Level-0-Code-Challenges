function findingVowels(str){
    let vowels = "aeuoi";
    let vowelsFound = "";
    for(let i = 0; i < vowels.length; i++){
        if(str.toLowerCase().includes(vowels[i])){
          vowelsFound += vowels[i] + ", ";
        }
    }
    console.log("Vowels:", vowelsFound);
}
findingVowels("UmuziUmuzi");
