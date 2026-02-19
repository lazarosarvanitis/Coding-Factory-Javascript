// #!/usr/bin/env node --Shebang for node.js, allows the script to be run directly from the command line
/**
 * Απλή faction που μετατρέπει βαθμούς Κελσίου σε Φαρενάιτ και την εκτυπώνει στην κονσόλα.
 */

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = 25; 

console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`);