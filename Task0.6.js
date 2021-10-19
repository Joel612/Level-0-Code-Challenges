function maxNum(number1, number2, number3){

    if(number1 > number2){
        if(number1 > number3){
            max = number1;
        }
        else{
            max = number3
        }
    }
    else{
        if(number2 > number3){
            max = number2;
        } else{
            max = number3;
        }
    }
    return max;
}
console.log(maxNum(2,0,5));