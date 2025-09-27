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
type CompleteCountry = BaseCountry & Population;

/**
 * Checks if a country has population data
 * @param {unknown} country - The country to check
 * @returns {country is CompleteCountry} True if country has population data
 * @example
 * ```typescript
 * if(hasPopulation(country)) {
 *  console.log(country.total)
 * }
 * ```
 */
function hasPopulation(
  country: unknown
): country is CompleteCountry {
  return (
    typeof country === "object" &&
    country !== null &&
    "total" in country &&
    "size" in country
  );
}

/**
 * Basic City Properties
 */

interface City {
  name: string;
  country: string;
  population?: number;
}

/**
 * Required city information with all optional properties required
 * @typedef {Required<City>} RequiredCity
 */

type RequiredCity = Required<City>;

/**
 * Read-only city information that cannot be modified
 * @typedef {Readonly<City>} ReadonlyCity
 * @example
 * ```typescript
 * const paris: ReadonlyCity = {
 *  name: "Paris",
 *  country: "France"
 * };
 * paris.name = "Paris2"; // Error: Cannot modify readonly property
 * ```
 */

type ReadonlyCity = Readonly<City>;
