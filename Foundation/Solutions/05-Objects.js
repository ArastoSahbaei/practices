
function obj1() {

    /*
        Create an object "person" with information about Johan Rheborg: first name, last name, year of birth
        Print the first name
        Print his full name
    */

    let person = {
        firstName: 'Johan',
        lastName: 'Rheborg',
        born: 1963
    }
    console.log(person.firstName);
    console.log(`${person.firstName} ${person.lastName}`);
}

function obj2() {

    /*
        Continue building on "person"
        Add a couple of characters to the object "person" (Percy Nilegård, Farbror Barbro ...)
        Add address details (street, city, country)

        Print info about Johan based on the object "person":
             Johan was born in 1963
             Johan lives on the street Kammakargatan 38 apartment 1401
             Johan has played 3 roles, including Percy Nilegård
    */

    let person = {
        firstName: 'Johan',
        lastName: 'Rheborg',
        born: 1963,
        characters: ['Percy Nilegård', 'Farbror Barbro', 'Kenny Starfighter'],
        adress: {
            street: 'Kammakargatan 38 lgh 1401',
            city: 'Stockholm',
            country: 'Sweden'
        }
    }
    console.log(`${person.firstName} was born in ${person.born}`);
    console.log(`${person.firstName} lives on the street  ${person.adress.street}`);
    console.log(`${person.firstName} has played ${person.characters.length} roles, including ${person.characters[0]}`);
}


function obj3() {

    /*
        Create an array of "paintings" with three paintings (three elements)
        For each painting there is info: name, artist and the year it was painted
        Print the number of paintings: "There are 3 paintings in the array"
        Print info about the third painting: "Pablo Picasso painted Guernica in 1937"
        Loop through all the paintings with "for of" and print out all the info in tabular form
        Tip: use "padEnd" to print the table neatly
    */
    let paintings = [
        {
            name: "Stjärnenatt",
            artist: "Vincent van Gogh",
            year: 1889
        },
        {
            name: "Nattvarden",
            artist: "Leonardo da Vinci",
            year: 1499
        },
        {
            name: "Gurenica",
            artist: "Pablo Picasso",
            year: 1937
        }
    ];
    console.log(`There are ${paintings.length} paintings in the array`);
    console.log(`${paintings[2].artist} painted ${paintings[2].name} in ${paintings[2].year}`);
    for (let p of paintings) {
        console.log(`${p.name.padEnd(20)}${p.artist.padEnd(20)}${p.year}`);
    }
}

function obj4() {

    /*
        Create an object "Skriet" (by Edvard Munch 1893). Add it to "paintings" using "push".
        Print its year using the variable "paintings" (ie 1893)
        Use "pop" several times to remove the last three paintings
        Print the number of paintings in the array
    */
    let paintings = [
        {
            name: "Stjärnenatt",
            artist: "Vincent van Gogh",
            year: 1889
        },
        {
            name: "Nattvarden",
            artist: "Leonardo da Vinci",
            year: 1499
        },
        {
            name: "Gurenica",
            artist: "Pablo Picasso",
            year: 1937
        }
    ];
    let skriet = {
        name: "Skriet",
        artist: "Edvard Munch",
        year: 1893
    };
    paintings.push(skriet);
    console.log(paintings[3].year);
    // Alternative: paintings.splice(-3, 3);
    paintings.pop();
    paintings.pop();
    paintings.pop();
    console.log(paintings.length);
}

