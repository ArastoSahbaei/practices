
// A function

function skrivUtTaletPlusTre(x) {
    let result = x + 3;
    console.log(result);
}

// A function

function iLikeData() {
    console.log("------- JAG GILLAR DATA! ------");
}

// A function with parameters

function iLikeDataWithBorder(addBorder) {
    if (addBorder === true) {
        console.log("-------------------------------");
    }
    console.log("------- JAG GILLAR DATA! ------");

    if (addBorder === true) {
        console.log("-------------------------------");
    }
}

// A function with multiple parameters

/*

Detail:

    "x".repeat(10)
    "xxxxxxxxxx"

*/
function iLikeDataWithBorderAndRepeat(addBorder, borderChar) {
    if (addBorder === true) {
        console.log(borderChar.repeat(31));
    }

    console.log(borderChar + "       JAG GILLAR DATA!      " + borderChar);

    if (addBorder === true) {
        console.log(borderChar.repeat(31));
    }
}

// An array as a parameter

function skrivUtListan(arr) {

    console.log("EN LISTA!");
    for (let x of arr) {
        console.log("* " + x);
    }
}

// "includes" and "toUpperCase"

television("aaaaaaaaaaaaaaaaaaaaaaaaaaa")

function television(x) {
    if (["SVT1", "SVT2", "TV4"].includes(x))
        console.log("I know that channel");
    else
        console.log("What?");
}




