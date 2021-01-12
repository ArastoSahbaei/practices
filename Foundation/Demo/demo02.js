
// An array. Pick some elements

let minaTräd = ["asp", "alm", "gran", "al", "björk"];

console.log(minaTräd);
console.log(minaTräd[0]);
console.log(minaTräd[3]);

// Add a tree

minaTräd.push("ek");
minaTräd.push("tall");

console.log(minaTräd)

// length

console.log("There are " + minaTräd.length + " trees")

// pop

let xxx = minaTräd.pop()

console.log(minaTräd)
console.log(xxx)

// The last value in an array

let sistaTrädet = minaTräd[minaTräd.length - 1]
console.log(sistaTrädet)

// Sort the array

minaTräd.sort()
console.log(minaTräd)