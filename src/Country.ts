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
export class Country {
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

/**
 * Possible country population sizes
 */
type PopulationSize = "small" | "medium" | "large";

/**
 * Basic country information
 */
interface BaseCountry {
  /** The name of the country */
  name: string;
  /** The code of the country */
  code: string;
}

/**
 * Population Information
 */
interface Population {
  /** Total population count */
  total: number;
  /** Population size category */
  size: PopulationSize;
}

/**
 * Complete country information that combines base data with population
 */
export type CompleteCountry = BaseCountry & Population;
