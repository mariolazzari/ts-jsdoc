var Country = /** @class */ (function () {
    function Country(name, code) {
        this.languages = [];
        this.name = name;
        this.code = code;
    }
    Country.prototype.addLanguage = function (language) {
        this.languages.push(language);
    };
    return Country;
}());
var italy = new Country("Italy", "IT");
italy.addLanguage("Italian");
console.log({ italy: italy });
