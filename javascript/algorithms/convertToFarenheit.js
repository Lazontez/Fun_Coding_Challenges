// Write a function that converts Celsius to Fahrenheit
// Formula: F = C * 1.8 + 32

function convertToFahrenheit(celsius) {
    if(typeof(celsius) == 'number'){
        return (celsius * 1.8 + 32).toFixed(0)
    }
    return 'Expected a Number'
}

console.log(convertToFahrenheit(21))