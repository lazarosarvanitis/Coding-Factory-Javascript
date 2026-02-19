/**
 * Δοθέντος δύο ακεραίων, να επιστραφεί το πηλίκο της διαίρεσης του πρώτου με τον δεύτερο, στρογγυλοποιημένο σε δυο δεκαδικά ψηφία.
 */

let num1 = 10;
let num2 = 3;
let roundedResult = 0;

result = num1 / num2;
roundedResult = Math.round(result * 100) / 100;
console.log(roundedResult); // Output: 3.33
