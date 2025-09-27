/**
 * Represents a country with its name, country code, and spoken languages.
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
   * Ad a spoken language to the country.
   * @param {string} language - The name of the language to add
   * @returns {void}
   * @example
   * italy.addLanguage("Italian");
   */
  addLanguage(language: string) {
    this.languages.push(language);
  }
}

const italy = new Country("Italy", "IT");
italy.addLanguage("Italian");

console.log({ italy });
