function celsiusToFahrenheit(celsius){
    let celsToFahr = celsius * 9 / 5 + 32;
    let result = celsius +'\xB0C is ' + celsToFahr + '\xB0F.';
        console.log(result);
}

function fahrenheitToCelsius(fahrenheit){
    let fahrToCels = (fahrenheit - 32) * 5 / 9;
    let result = fahrenheit + '\xB0F is ' + fahrToCels + '\xB0C.';
        console.log(result);
}
celsiusToFahrenheit(43);
fahrenheitToCelsius(40);
