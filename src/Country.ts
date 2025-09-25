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
