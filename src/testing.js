/**
 * Adds the second number to the first number.
 *
 * This function takes two numeric values as input and returns
 * the result of adding the second value to the first.
 * It is commonly used in basic arithmetic operations where
 * the sum of two numbers needs to be calculated.
 *
 * The function expects valid numeric inputs. If non-numeric
 * values are provided, the result may be `NaN` depending on
 * JavaScript's type coercion behavior.
 *
 * Example:
 * add(10, 4) // returns 14
 *
 * @param {number} a - The first number (addend) to which another number will be added.
 * @param {number} b - The second number (addend) that will be added to the first number.
 *
 * @returns {number} The sum of the first and second numbers.
 */
function add(a, b) {
  return a + b;
}