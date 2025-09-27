/**
 * Represents a continent containing multiple countries
 * @see {@link Country}  for individual country details
 * @class
 */

class Continent {
  readonly name: string;
  countries: Country[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addCountry(country: Country) {
    this.countries.push(country);
  }
}
