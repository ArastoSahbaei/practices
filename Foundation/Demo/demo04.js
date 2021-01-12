// Logic (and och or)

let fruit = "päron";
let weight = 120;

let x1 = fruit === "päron" || weight > 200                                                // true
let x2 = fruit === "päron" && weight > 200                                                // false

let x3 = (fruit === "banan" && weight > 100) || fruit == "päron"                          // true
let x4 = fruit === "banan" && weight > 100 || fruit == "päron"                            // true (samma)
let x5 = fruit === "banan" && (weight > 100 || fruit == "päron")                          // false








// switch 

let day = "";
let dayNumber = new Date().getDay()

switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// Difference between == and ===

10 == "10"                                                             // true
10 === "10"                                                            // false

// if-statement

let a = 5000;
let x = "";

if (a > 1000) {
  x = "a är ett stort tal";
} else {
  x = "a är ett litet tal";
}

// "ternary operator"

let x = a > 1000 ? "a är ett stort tal" : "a är ett litet tal";

console.log(x);
