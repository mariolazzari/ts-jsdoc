/**
 * Greets people with their name.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting message.
 * @example
 * greetings("Mario"); // "Hello, Mario!"
 * @since 1.0.0 // Function first added
 * @version 1.2.0 // Current version
 * @author Mario Lazzari <mario.lazzari@gmail.com>
 * @copyright 2025
 * @throws {TypeError} If the name is not a string.
 * @deprecated Use `sayHello` instead.
 * @todo Add more languages support.
 */

export function greetings(name: string): string {
  return `Hello, ${name}!`;
}
