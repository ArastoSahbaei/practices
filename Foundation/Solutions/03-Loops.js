
function loop1() {

    /*
        Use a for-loop to print all numbers between 5 and 18
    */
    for (let i = 5; i <= 18; i++) {
        console.log(i);
    }
}

function loop2() {

    /*
        Use a for-loop to print all numbers between 0 and 9
    */
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

function loop3() {

    /*
        Use a for-loop to print:

            "Number 4!" 
            "Number 5!" 
            "Number 6!" 
            "Number 7!" 
            "Number 8!" 
    */
    for (let i = 4; i <= 8; i++) {
        console.log(`Number ${i}!`);
    }
}

function loop4() {

    /*
        Solve the previous task but use a while loop
    */
    let i = 4;
    while (i <= 8) {
        console.log(`Number ${i}!`);
        i++;
    }
}

function loop5() {

    /*
        Create an array "importantYears" with the years 1492, 1789, 1859, 1929
        Use "for of" to print all years
    */
    const importantYears = [1492, 1789, 1859, 1929];
    for (const year of importantYears) { // alternativt "let"
        console.log(year);
    }
}

function loop6() {

    /*
        Create an array "importantYears" with the years 1492, 1789, 1859, 1929
        Use "for of" to print all the years with a number on the left:
        1) 1492
        2) 1789
        3) 1859
        4) 1929
    */
    let rownumber = 1;
    const importantYears = [1492, 1789, 1859, 1929];
    for (const year of importantYears) {
        console.log(`${rownumber}) ${year}`);
        rownumber++;
    }

    /*

    Alternative:

        for (let [index, year] of importantYears.entries()) {
            console.log(index+1 +") "+ year)
        }

     Extra: solve the task with ".forEach"

     Solution:

        const importantYears = [1492, 1789, 1859, 1929];
        importantYears.forEach((x, index) => console.log(`${index + 1}) ${x}`))

     */
}

function loop7() {

    /*
        Same as last exercise but interrupt the loop if the year is higher than 1800. So should give:
        1) 1492
        2) 1789    
    */
    let rownumber = 1;
    const importantYears = [1492, 1789, 1859, 1929];
    for (const year of importantYears) {
        if (year > 1800) {
            break;
        }
        console.log(`${rownumber}) ${year}`);
        rownumber++;
    }
}
