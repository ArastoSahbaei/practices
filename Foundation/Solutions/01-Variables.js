

var1();

function var1() {
    /* Print "My name is XXXX" in the console */
    console.log('My name is Oscar');
}

function var2() {
    /* 
    Create variable and set it to 35.
    Print the value of the number (using "console.log")
    */

    let number1 = 35;
    console.log(number1);

}

function var3() {

    /*
        Create a variable "x" with the value 12
        Create a variable "y" with the value 6
        Create a variable "z" that sums the numbers
        Print the answer "Answer: 18"
    */
    let x = 12;
    let y = 6;
    let z = x + y;
    console.log('Answer: ' + z);

}

function var4() {

    /*
     Create a variable "x" with the value 77
     Create a variable "y" with the value 44
     Change the value of "x" to 55
     Create a variable "z" that sums the numbers
     Print the sum
    */
    let x = 77;
    let y = 44;
    x = 55;
    let z = x + y;
    console.log('Answer: ' + z);
}


function var5() {

    /*
    Same as last exercise but let x be a constant (const)
    Which error message appears?
    */
    const x = 77;
    let y = 44;
    x = 55; // TypeError: Assignment to constant variable

    let z = x + y;
    console.log('Answer: ' + z);

}

function var6() {
    /*
    Create a variable "number1" and set it to the string "77"
    Create a variable "number2" and set it to the string "50"
    Print number 1 + number 2 (should give 7750)
    */
    let number1 = "77";
    let number2 = "50";
    console.log(number1 + number2);
}

function var7() {
    /*
     Create a variable "number1" and set it to the string "77"
     Create a variable "number2" and set it to 50
     Use parseInt to convert "number1" to the number 77
     Print number 1 + number 2 (should give 127)
    */
    let number1 = "77";
    let number2 = 50;
    number1 = parseInt(number1);
    console.log(number1 + number2);
}

function var8() {
    /*
    Create variable number with the value 42.
    Print "My favorite number is 42"
    */
    let number = 42;
    console.log("My favorite number is " + number);
}

function var9() {

    /* Use backtick (i.e. the character `) to solve the problem above */

    let number = 42;
    console.log(`My favorite number is ${number}`);
}

function var10() {
    /*
        Create a variable "dinner" and set it to 'broccoli'
        Create a variable "Dinner" and set it to 'pasta'
        Print the value of "dinner"
    */
    let middag = 'broccoli';
    let Middag = 'pasta';
    console.log(middag);
}

function var11() {
    /*
    Create a variable x with the value 12
    Create a variable y with the value true
    Create a variable z with the value 'Monday'
    Create a variable w without setting any value
    Print the type of these four variables using "typeof"
    */
    let x = 12;
    console.log(typeof x); // number

    let y = true;
    console.log(typeof y); // boolean

    let z = 'Monday';
    console.log(typeof z); // string

    let w;
    console.log(typeof w); // undefinied
}

function var12() {
    /*
    Create a variable "x". Set the value to "parseInt ('fox')"
    Print x (should give "NaN")
    Use "isNaN" to check if x is a non-number. Set y to that value (y will get the value true)
    Print y
    */
    let x = parseInt('fox');
    console.log(x); // "NaN"

    let y = isNaN(x);
    console.log(y);  // true
}

