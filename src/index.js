/**
 * Subtracts the second number from the first number.
 *
 * This function takes two numeric values as input and returns
 * the result of subtracting the second value from the first.
 * It is commonly used in basic arithmetic operations where
 * the difference between two numbers needs to be calculated.
 *
 * The function expects valid numeric inputs. If non-numeric
 * values are provided, the result may be `NaN` depending on
 * JavaScript's type coercion behavior.
 *
 * Example:
 * subtract(10, 4) // returns 6
 *
 * @param {number} a - The first number (minuend) from which another number will be subtracted.
 * @param {number} b - The second number (subtrahend) that will be subtracted from the first number.
 *
 * @returns {number} The difference between the first and second numbers.
 */
function subtract(a, b) {
  return a - b;
}