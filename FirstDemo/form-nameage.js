
/*
    Om användaren t.ex matar in Lisa och 25 så meddela:

        Your name is Lisa and you are 25 years old

    Om användaren matar in Oscar och 45 så svara:

        I like you!
 
*/

function respondToUser() {

    const yourAge = document.getElementById("yourAge").value;
    const yourName = document.getElementById("yourName").value;

    let response = "";

    if (yourAge === "45" && yourName === "Oscar") {

        response = "I like you!"

    } else {

        response = `Your name is ${yourName} and you are ${yourAge} years old`
        //response = "Your name is " + yourName + " and you are " + yourAge + " years old"

    }

    document.getElementById("response").innerHTML = response;
}

document.getElementById("okButton").onclick = respondToUser
