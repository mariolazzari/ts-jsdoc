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

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }
  addLanguage(language: string) {
    this.languages.push(language);
  }
}

const italy = new Country("Italy", "IT");
italy.addLanguage("Italian");

console.log({ italy });
