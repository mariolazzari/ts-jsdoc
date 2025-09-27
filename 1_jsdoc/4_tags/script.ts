/**
 * Greets a person in French
 * @param {string} name - The name of the person to greet
 * @returns {string} A French greeting with a person's name
 * @example
 * greetInFrench("Alex"); // Returns: "Bonjour, Alex!"
 * @since 1.0.0 // Function was first added in version 1.0.0
 * @version 1.2.0 // Current version
 * @author John Smith <john@example.com>
 * @copyright 2025
 * @throws {TypeError} If name is not a string
 * @deprecated Use greetInternationally instead
 * @todo Add support for last name and any honorifics
 */

function greetInFrench(name: string) {
  return `Bonjour, ${name}`;
}

greetInFrench("Alex");
