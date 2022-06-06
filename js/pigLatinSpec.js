// Rewrite this in Unit Test

var pig = require("./pigLatin");

console.log("translates a word beginning with a vowel:");
console.log(pig.translate("apple") === "appleay");
console.log("translates a word beginning with a consonant:");
console.log(pig.translate("banana") === "ananabay");
console.log("translates a word beginning with two consonants:");
console.log(pig.translate("cherry") === "errychay");
console.log("translates two words:");
console.log(pig.translate("eat pie") === "eatay iepay");
console.log("translates a word beginning with three consonants:");
console.log(pig.translate("three") === "eethray");
console.log("counts 'sch' as a single phoneme:");
console.log(pig.translate("school") === "oolschay");
console.log("counts 'qu' as a single phoneme:");
console.log(pig.translate("quiet") === "ietquay");
console.log("counts 'qu' as a consonant even when it's preceded by a consonant:");
console.log(pig.translate("square") === "aresquay");
console.log("translates many words:");
console.log(pig.translate("the quick brown fox") === "ethay ickquay ownbray oxfay");

// console.log(`${pig.translate("apple")} === appleay`);
// console.log(`${pig.translate("banana")} === ananabay`);
// console.log(`${pig.translate("cherry")} === errychay`);
// console.log(`${pig.translate("eat pie")} === eatay iepay`);
// console.log(`${pig.translate("three")} === eethray`);
// console.log(`${pig.translate("school")} === oolschay`);
// console.log(`${pig.translate("quiet")} === ietquay`);
// console.log(`${pig.translate("square")} === aresquay`);
// console.log()
// console.log(`${pig.translate("university")} === universityay`)
// console.log(`${pig.translate("apple university")} === appleay universityay`)
// console.log(`${pig.translate("School")} === Oolschay`)
// console.log(`${pig.translate("I go to apple university")} === Iay ogay otay appleay universityay.`)
// console.log(`${pig.translate("Hi, I'm Zach.\nHow are you?")}\n=== Ihay, I'may Achzay.\n=== Owhay areay ouyay?`)

// write a test asserting that capitalized words are still capitalized
// (but with a different initial capital letter, of course) retain the
// punctuation from the original phrase
