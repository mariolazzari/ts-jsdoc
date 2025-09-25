# JavaScript: Five Advanced Challenges and Concepts

## Incorporating JSDoc

### Configuring TypeScript project

```sh
pnpm init
pnpm add -D typescript @types/node
tsc --init
```

### Writing TypeScript function

```ts
function greetings(name: string): string {
  return `Hello, ${name}!`;
}
```

### Annotating TypeScript function

```ts
/**
 * Greets people with their name.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting message.
 * @example
 * greetings("Mario"); // "Hello, Mario!"
 */

function greetings(name: string): string {
  return `Hello, ${name}!`;
}
```

### Adding additional information with tags

```ts
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

function greetings(name: string): string {
  return `Hello, ${name}!`;
}
```

### Documenting classes

```ts
/**
 * Class representing a country.
 * @class
 */

export class Country {
  /**
   * Creates an instance of Country.
   * @param {string} name - The name of the country.
   * @param {string} code - The ISO code of the country.
   */

  readonly name: string;
  readonly code: string;

  /**
   * List of languages spoken in the country.
   * @type {string[]}
   * @default []
   */

  languages: string[] = [];

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }

  addLanguage(language: string) {
    this.languages.push(language);
  }
}
```
