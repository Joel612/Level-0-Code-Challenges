function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  if (hours == 1 && minutes == 1){
    return hours + " hour" + "," + minutes + " minute";  
  } else if(hours > 1 && minutes > 1 ){
      return hours + " hours" + "," + minutes + " minutes";
  } else if(hours > 1 && minutes == 1){
      return hours + " hours" + "," + minutes + " minute";
    }else if(hours == 1 && minutes > 1){
      return hours + " hour" + "," + minutes + " minutes";
    }else if(hours == 0 && minutes > 1){
      return hours + " hours "+ "," + minutes + " minutes";
      }else if (hours == 1 && minutes == 0){
        return hours + " hour " + "," + minutes + " minutes";
      }
}

console.log(time_convert(60));
console.log(time_convert(12));
