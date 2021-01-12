
function arr1() {

    /*
        I---------I---------I---------I
        0         1         2         3
    
        Create an array of "cities" with the cities Stockholm, Gothenburg and New York
        Print the first, second, and third elements of the array
        What happens if you try to access the fourth element (which does not exist)?
    */

    let cities = ['Stockholm', 'Göteborg', 'New York'];

    console.log(cities[0]);
    console.log(cities[1]);
    console.log(cities[2]);
    console.log(cities[3]); // undefined

}

function arr2() {

    /*
        Create an array of "cities" with the cities Stockholm, Gothenburg and New York
        Add another city "Krakow" using "push"
        Print the fourth element in "cities" ("Krakow")
    */

    let cities = ['Stockholm', 'Göteborg', 'New York'];
    cities.push('Krakow');
    console.log(cities[3]);
}


function arr3() {
    /*
        Create an array of "cities" with the cities of Stockholm, Gothenburg and New York
        Add another city "Krakow" using "push"
        Add another city "Berlin" using "push"
        Print the number of cities in the array
        Pick the second and fourth cities in the list. Print "My favorite cities are Gothenburg and Krakow"
    */
    let cities = ['Stockholm', 'Göteborg', 'New York'];
    cities.push('Krakow');
    cities.push('Berlin');   // alternative: cities.push('Krakow', 'Berlin');
    console.log(`There are ${cities.length} cities in the array`);
    console.log(`My favorite cities are ${cities[1]} and ${cities[3]}`);
}

function arr4() {

    /*
        Create an array of "cities" with the cities of Stockholm, Gothenburg and New York
        Use "pop" to pick out the last city and place in a variable "poppedCity"
        Print the length of the list (2)
        Print the popped city (New York)
        Use cities.length to pick the last item in the list (Gothenburg)
    */
    let cities = ['Stockholm', 'Göteborg', 'New York'];
    let poppedCity = cities.pop();
    console.log(cities.length); // 2
    console.log(poppedCity); // New York
    console.log(cities[cities.length - 1]); // Göteborg
}

function arr5() {

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Print the number of numbers in the list (4)
        Print the third number in the list (777)
    */
    let numbers = [5, 66, 777, 12];
    console.log(numbers.length);
    console.log(numbers[2]);
}

function arr6() {

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Sort the numbers by typing: numbers.sort();
        Sort the numbers by typing: numbers.sort((a, b) => a-b);
        Print the value of "numbers"
        Compare the two results
    */
    let numbers = [5, 66, 777, 12];
    numbers.sort();
    console.log(numbers);  // "12", "5", "66", "777"
    numbers.sort((a, b) => a - b);
    console.log(numbers);
}

function arr7() {

    /*
        Sort the list backwards
    */
    let numbers = [5, 66, 777, 12];
    numbers.sort((a, b) => b - a);
    console.log(numbers);
}

function arr8() {

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Reverse the order using "reverse"
        Print the array ([12, 777, 66, 5])
    */
    let numbers = [5, 66, 777, 12];
    numbers.reverse();
    console.log(numbers);

}