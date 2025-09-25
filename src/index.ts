/**
 * Greets people with their name.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting message.
 * @example
 * console.log(greetings("Mario")); // "Hello, Mario!"
 */
function greetings(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greetings("Mario"));
