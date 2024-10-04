
const { kalkiTitle,kalkiStarCast,aboutKalkiMovie } = require ("./kalki.js");
const { devaraTitle,devaraStarCast,aboutDevaraMovie } = require ("./devara.js");

let countryName = "Bharat";
let countryPMName = "Modi";
let countryPresidentName = "Murmu";

let aboutBharat = ()=>{
    console.log("The Republic of India has two principal official short names each of which is historically significant India and Bharat ");
};

aboutBharat();

console.log(countryName);
console.log(countryPMName);
console.log(countryPresidentName);

console.log(kalkiTitle);
console.log(kalkiStarCast);
aboutKalkiMovie();

console.log(devaraTitle);
console.log(devaraStarCast);
aboutDevaraMovie();
