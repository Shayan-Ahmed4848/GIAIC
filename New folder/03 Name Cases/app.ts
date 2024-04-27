let personName = "muhammad Ahmed";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (save) => save.toUpperCase()));