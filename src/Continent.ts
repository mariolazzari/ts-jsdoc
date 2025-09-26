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
