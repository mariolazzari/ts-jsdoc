import { Country } from "./Country";
import { greetings } from "./script";

console.log(greetings("Mario"));

const italy = new Country("Italy", "IT");
italy.addLanguage("Italian");
console.log(italy);
