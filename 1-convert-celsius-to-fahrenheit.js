/* You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and assign it 
the Fahrenheit temperature equivalent to the given Celsius temperature. */

function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);