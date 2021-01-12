
function fun1() {

    /*
        Make a "sayHi" method. Call it twice
    
            sayHi ()
            sayHi ()

        This should be printed:

            --------
            -------- WELCOME
            --------

            --------
            -------- WELCOME
            --------
    */

    function sayHi() {
        console.log("--------");
        console.log("-------- WELCOME");
        console.log("--------");
        console.log("");
    }

    sayHi();
    sayHi();
}

function fun2() {

    /*

        Similar to before but do a method sayHiTo() that takes a name as an input parameter.

            Ex sayHiTo("Oscar") should print:

            --------
            -------- WELCOME OSCAR
            --------

    */

    function sayHiTo(ettnamn) {
        console.log("--------");
        console.log(`-------- WELCOME ${ettnamn.toUpperCase()}`);
        console.log("--------");
        console.log("");
    }

    sayHiTo('Oscar');
    sayHiTo('Musse');
}

fun3()

function fun3() {

    /*

        Make a method "adult" with two parameters "name" and "age". Call it three times
    
            adult("Peter", 16);
            adult("Lisa", 26);
            adult("Ragnar", 15);

        This should be printed:

            Note! Peter is not an adult!
            Lisa is an adult
            Note! Ragnar is not an adult!
    */

    function myndig(name, age) {
        if (age >= 18) {
            console.log(`${name} is an adult`);
        } else {
            console.log(`Note! ${name} is not an adult!`);
        }
    }

    myndig("Peter", 16);
    myndig("Lisa", 26);
    myndig("Ragnar", 15);

}

function fun4() {

    /*

    Create a method "printVAT" that takes "price" as the input parameter.
    
    If you e.g. the method is called as follows:

         printVAT(1000)

     ...this is how it should be printed:

         The VAT for the product is 250kr
    */

    function printVAT(price) {
        let vat = price * 0.25;
        console.log(`The VAT for the product is SEK ${vat}kr`);
    }

    printVAT(1000);
    printVAT(400);
}

// -------- EXTRA UPPGIFTER -----------------------------------------


function extraFun1() {

    /*

    Create a method "recipe" with a parameter "recipeName" and "ingredients". Call it:
    
         recipe("Apple Cake", ["Apple", "Flour", "Cinnamon"]);
         recipe("Rotmos", ["Potatoes", "Turnip"]);

     This should be printed:

         TO MAKE APPLE YOU NEED:
         * APPLE
         * FLOUR
         * CINNAMON

         TO MAKE ROTMOS YOU NEED:
         * POTATOES
         * TURNIP
         
    */

    function recipe(recipeName, ingredients) {
        console.log(`TO MAKE ${recipeName.toUpperCase()} YOU NEED:`);
        for (let item of ingredients) {
            console.log(`* ${item.toUpperCase()}`);
        }

        console.log("");
    }

    recipe("Apple Cake", ["Apple", "Flour", "Cinnamon"]);
    recipe("Rotmos", ["Potatoes", "Turnip"]);
}

function extraFun2() {

    /*

     In Sweden, there are three VAT rates: 25%, 12% and 6%. See here:
     https://www.verksamt.se/starta/skatter-och-avgifter/moms/olika-momssatser

     Write a method "writeOutMoms" that calculates VAT on a product based on the type of product it is

     These calls:

         writeVAT("newspaper", 1000);
         writeVAT("restaurant visit", 1000);
         writeVAT("flight", 1000);
         writeVAT("falafel", 1000);
         writeVAT("hipster beer", 1000);

     Should give the answers:

         The VAT for a newspaper that costs SEK 1000 is SEK 60
         The VAT for a restaurant visit that costs SEK 1000 is SEK 120
         The VAT for a flight that costs SEK 1000 is SEK 60
         The VAT for a falafel that costs SEK 1000 is SEK 250
         The VAT for a hipster beer that costs SEK 1000 is SEK 250

    */

    function skrivUtMoms(typeOfProduct, price) {
        let vatPercentage = 0.25;
        let twelvePercent = ["livsmedel", "restaurangbesök", "hotell", "konstverk"];
        let sixPercent = ["tidning", "bok", "taxi", "buss", "flyg", "tåg", "konsert"];
        if (twelvePercent.includes(typeOfProduct))
            vatPercentage = 0.12;

        if (sixPercent.includes(typeOfProduct))
            vatPercentage = 0.06;

        let vat = price * vatPercentage;
        console.log(`Momsen för en/ett ${typeOfProduct} som kostar ${price}kr är ${vat}kr`)
    }

    skrivUtMoms("tidning", 1000);
    skrivUtMoms("restaurangbesök", 1000);
    skrivUtMoms("flyg", 1000);
    skrivUtMoms("falafel", 1000);
    skrivUtMoms("hipsteröl", 1000);

}

function extraFun3() {

    /*

        Sorry, no translation :)

        Modifiera "skrivUtMoms" så funktionen tar hänsyn till om ordet innan ska vara "en" eller "ett":

            Momsen för en tidning som kostar 1000kr är 60kr
            Momsen för ett restaurangbesök som kostar 1000kr är 120kr
            Momsen för ett flyg som kostar 1000kr är 60kr
            Momsen för en falafel som kostar 1000kr är 250kr
            Momsen för en hipsteröl som kostar 1000kr är 250kr

        Tips: skriv en ny metod:

            function enEtt(word) {
            }

        ...som utifrån ord returnerar "en" eller "ett" (eller "en/ett" om ordet inte finns i ordlistan) 

    */

    function enEtt(word) {
        let ett = ["livsmedel", "restaurangbesök", "hotell", "konstverk", "flyg", "tåg"]
        let en = ["tidning", "bok", "taxi", "buss", "konsert", "falafel", "hipsteröl"]

        if (ett.includes(word))
            return "ett"
        else if (en.includes(word))
            return "en"
        else
            return "en/ett"
    }

    function skrivUtMoms(typeOfProduct, price) {
        let vatPercentage = 0.25;
        let twelvePercent = ["livsmedel", "restaurangbesök", "hotell", "konstverk"];
        let sixPercent = ["tidning", "bok", "taxi", "buss", "flyg", "tåg", "konsert"];
        if (twelvePercent.includes(typeOfProduct))
            vatPercentage = 0.12;

        if (sixPercent.includes(typeOfProduct))
            vatPercentage = 0.06;

        let vat = price * vatPercentage;

        console.log(`Momsen för ${enEtt(typeOfProduct)} ${typeOfProduct} som kostar ${price}kr är ${vat}kr`)
    }

    skrivUtMoms("tidning", 1000);
    skrivUtMoms("restaurangbesök", 1000);
    skrivUtMoms("flyg", 1000);
    skrivUtMoms("falafel", 1000);
    skrivUtMoms("hipsteröl", 1000);

}

function extraFun4() {
    /*
     Rewrite the enEtt-method above but use "Set":

        let xxx = new Set()  

     */

    function enEtt(word) {
        let ett = new Set()
        let en = new Set();

        ["tidning", "bok", "taxi", "buss", "konsert", "falafel", "hipsteröl"]
            .forEach(x => en.add(x)); // om semikolon inte är med så blir det fel (!)

        ["livsmedel", "restaurangbesök", "hotell", "konstverk"].forEach(x => ett.add(x))

        if (ett.has(word))
            return "ett"
        else if (en.has(word))
            return "en"
        else
            return "en/ett"
    }

    console.log(enEtt("tidning"));
    console.log(enEtt("restaurangbesök"));
    console.log(enEtt("apa"));

}

function extraFun5() {

    // Alternative
    function enEtt(word) {
        let dic = {};

        ["tidning", "bok", "taxi", "buss", "konsert", "falafel", "hipsteröl"].forEach(x => dic[x] = "en");
        ["livsmedel", "restaurangbesök", "hotell", "konstverk"].forEach(x => dic[x] = "ett");

        if (dic[word])
            return dic[word]
        else
            return "en/ett"
    }

    console.log(enEtt("tidning"));
    console.log(enEtt("restaurangbesök"));
    console.log(enEtt("apa"));
}