function lettersInCommon(string1, string2) {
    let search = {};
    
    for(let i=0; i < string1.length; i++) {
      search[string1.charAt(i)] = 1;
    }
   
    let commonCharacters =[]; 
    for(let i=0; i < string2.length; i++) {
      if( search[string2.charAt(i)] == 1) {
        commonCharacters.push(string2.charAt(i)); 
      }
    }
    
    search = commonCharacters.join(","); 
    console.log("Common Letters:", search);
  }
  lettersInCommon("house", "computers");
