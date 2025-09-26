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

### Documenting class methods

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

  /**
   * Creates an instance of Country.
   * @param {string} name - The name of the country.
   * @param {string} code - The ISO code of the country.
   * @example
   * const country = new Country('Italia', 'IT');
   */
  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }

  /**
   * Adds a language to the list of languages spoken in the country.
   * @param {string} language - The language to add.
   * @returns {void}
   * @example
   * country.addLanguage('Italian');
   */
  addLanguage(language: string) {
    this.languages.push(language);
  }
}
```

## JSDoc configuration

### Generating a website with JSDoc

```sh
touch jsdoc.json
pnpm add -D jsdoc
```

```json
{
  "source": {
    "includePattern": ".+\\.(js|ts)$",
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  },
  "plugins": ["jsdoc-babel"],
  "babel": {
    "extensions": "ts",
    "ignore": ["**/*.(test|spec).ts"]
  },
  "opts": {
    "destination": "docs",
    "recurse": true
  }
}
```

### Selecting custom theme

[Clean JSDoc](https://www.npmjs.com/package/clean-jsdoc-theme/v/4.2.9)

```sh
pnpm add -D clean-jsdoc-theme
```

```json
{
  "source": {
    "includePattern": ".+\\.(js|ts)$",
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  },
  "plugins": ["jsdoc-babel"],
  "babel": {
    "extensions": "ts",
    "ignore": ["**/*.(test|spec).ts"]
  },
  "opts": {
    "destination": "docs",
    "recurse": true,
    "template": "node_modules/clean-jsdoc-theme"
  }
}
```

### Enabling Markdown

```json
{
  "source": {
    "includePattern": ".+\\.(js|ts)$",
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  },
  "markdown": {
    "idInHeadings": true,
    "hardwrap": false
  },
  "plugins": ["jsdoc-babel", "plugins/markdown"],
  "babel": {
    "extensions": "ts",
    "ignore": ["**/*.(test|spec).ts"]
  },
  "opts": {
    "destination": "docs",
    "recurse": true,
    "template": "node_modules/clean-jsdoc-theme"
  }
}
```

```ts
/**
 * Represents a country with its name, country code, and spoken languages.
 *
 * ## Usage Example
 * ```js
 * const italy = new Country("Italy", "IT");
 * italy.addLanguage("Italian");
 * console.log({ italy });
 * ```
 *
 *
 * @class
 */
class Country {
  /**
   * The full name of the country.
   * @readonly
   * @type {string}
   */
  readonly name: string;
  /**
   * The ISO country code.
   * @readonly
   * @type {string}
   */
  readonly code: string;
  /**
   * An array of languages spoken in the country
   * @type {string[]}
   * @default []
   */
  languages: string[] = [];

  /**
   * Creates a new Country instance
   * @param {string} name - The full name of the country
   * @param {string} code - The ISO country code (e.g. "IT" for Italy)
   * @example
   * const italy = new Country("Italy", "IT")
   */
  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }
  /**
   * Add a spoken language to the country.
   * @param {string} language - The name of the language to add
   * @returns {void}
   * @example
   * italy.addLanguage("Italian");
   */
  addLanguage(language: string) {
    this.languages.push(language);
  }
}
```

### Adding links between files

```ts
/**
 * Represents a continent containing multiple countries
 * @see {@link Country}  for individual country details
 * @class
 */

import { Country } from "./Country";

export class Continent {
  readonly name: string;
  countries: Country[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addCountry(country: Country) {
    this.countries.push(country);
  }
}
```

### Adding documentation to a class

```ts
/**
 * Represents a continent containing multiple countries
 * @see {@link Country}  for individual country details
 * @class
 */

import { Country } from "./Country";

export class Continent {
  /**
   * The name of the continent
   * @readonly
   * @type {string}
   */
  readonly name: string;
  /**
   * Collection of countries in this continent
   * @type {Country[]}
   * @see {@link Country}  for country structure
   */
  countries: Country[] = [];

  /**
   * Creates a new Continent instance
   * @param {string} name - the name of the continent
   * @example
   * const europe = new Continent("Europe");
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Adds a country to the continent
   * @param {Country} country - the country to add
   * @see {@link Country#constructor} for creating a new country
   * @returns {void}
   * @example
   * const italy = new Country("Italy", "IT");
   * europe.addCountry(italy);
   */
  addCountry(country: Country) {
    this.countries.push(country);
  }
}
```
