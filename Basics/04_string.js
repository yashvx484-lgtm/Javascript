const name = "Yash"
const age = "20"

// console.log(`My name is ${name} & my age is ${age}`);

const gamename = new String("Yash-knows-well ")

// -------------------------------------------

// console.log(gamename[0]);
// console.log(gamename[1]);
// console.log(gamename[2]);
// console.log(gamename[3]);


// ----------------------------------------------

console.log(gamename.__proto__); //to access object

//not needed can access object without .__proto__.xyz

console.log(gamename.length);

console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());

console.log(gamename.charAt(3));
console.log(gamename.indexOf('h'));

// --------------------------------------

const newString = gamename.substring(0, 4)
console.log(newString);


// const secondgame = new String("Hitesh")
// const secondstring = secondgame.substring(0, 6)
// console.log(secondstring);

// --------------------------------------

const anotherString = gamename.slice(-16, -1)
console.log(anotherString);

// --------------------------------------

const newstring = "   Yash"
console.log(newstring);
console.log(newstring.trim());

// --------------------------------------
const url = "https://yash.com/yash%20vaish"
console.log(url.replace('%', 'Is'));
console.log(url.includes("vaish")); //true
console.log(url.includes("gupta")); //false

console.log(gamename.split('-'));


