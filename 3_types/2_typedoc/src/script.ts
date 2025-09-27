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
