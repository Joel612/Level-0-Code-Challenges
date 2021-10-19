function celsiusToFahrenheit(celsius){
    var cToF = celsius * 9 / 5 + 32;
    var result = celsius +'\xB0C is ' + cToF + '\xB0F.';
        console.log(result);
}

function fahrenheitToCelsius(fahrenheit){
    var fToC = (fahrenheit - 32) * 5 / 9;
    var result = fahrenheit + '\xB0F is ' + fToC + '\xB0C.';
        console.log(result);
}
celsiusToFahrenheit(53);
fahrenheitToCelsius(80);