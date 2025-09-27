/**
 * Represents a country with its name and languages
 * @template LanguagesType - The type for storing language data - can be a string or an array of strings
 * @typedef {Object} Country
 * @property {string} name - The full name of the country
 * @property {LanguagesType} languages - languages spoken in the country. Can be either a comma-separated string or an array of strings
 */

type Country<LanguagesType> = {
  name: string;
  languages: LanguagesType;
};

const nzLanguages: Country<string> = {
  name: "New Zealand",
  languages: "English, Maori"
};

const spainLanguages: Country<string[]> = {
  name: "Spain",
  languages: [
    "Spanish",
    "Catalan",
    "Galician",
    "Basque",
    "Valencian"
  ]
};
