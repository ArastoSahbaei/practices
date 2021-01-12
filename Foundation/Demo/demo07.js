
// Functions that returns something

function convertToCelsius(far) {
    let c = (far - 32) * 5 / 9;
    return c;
}

function areaFörEnCirkel(r) {
    let area = r * r * Math.PI; // 3.1415926;
    return area;
}

// Multiple parameters
// This function uses another function

function volymFörCylinder(r, h) {
    let area = areaFörEnCirkel(r);
    let volym = area * h;
    return volym;
}

function ärEnPensioner(age) {
    if (age >= 65)
        return true;
    else
        return false;
}



// Function calls:

let area = areaFörEnCirkel(3);
console.log("The are of the circle is " + area + "m2");

let result = volymFörCylinder(3, 5);
console.log("The volume of the cylinder is " + result);

console.log("100 farenheit in celsius: " + convertToCelsius(100));
console.log("50 farenheit in celsius:  " + convertToCelsius(50));
console.log("0 farenheit in celsius:  " + convertToCelsius(0));

let yourAge = 17;
if (ärEnPensioner(yourAge)) {
    console.log("Oh, you are old");
} else {
    console.log("Youngster!");
}
