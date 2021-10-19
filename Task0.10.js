function lettersInCommon() {
    var search = {};
    
    for(var i=0; i < string1.length; i++) {
      search[string1.charAt(i)] = 1;
    }
   
    var commonCharacters =[]; 
    for(var i=0; i < string2.length; i++) {
      if( search[string2.charAt(i)] == 1) {
        commonCharacters.push(string2.charAt(i)); 
      }
    }
    
    search = commonCharacters.join(","); 
    console.log("Common Letters:", search);
  }
  var string1 = "house";
  var string2 ="computers";
  lettersInCommon();