// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

//Chiedo all'utente un numero tra 1 e 5
var user_number = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log(user_number);
document.getElementById("user-choice").insertAdjacentHTML("beforeEnd", user_number);

//Calcolo un numero casuale tra 1 e 5
var ia_number = randomNumber(1, 5);
console.log(ia_number);
document.getElementById("ia-choice").insertAdjacentHTML("beforeEnd", ia_number);

//Chiedo all'utente se sceglie pari o Dispari
var user_choice = prompt("La somma sarà pari o dispari?");
console.log(user_choice);
document.getElementById("user-odd").insertAdjacentHTML("beforeEnd", user_choice);

//Calcolo la somma dei due numeri e valuto se sono pari o Dispari
var total_number = user_number + ia_number;
document.getElementById("sum").insertAdjacentHTML("beforeEnd", total_number);
var final_result = isEven(total_number);
console.log(total_number, final_result);

//Stampo all'utente se ha indovinato
if (final_result && (user_choice == "pari")) {
    console.log("Hai vinto. La somma è pari come hai scelto.");
    document.getElementById("final-result").insertAdjacentHTML("beforeEnd", "<p>Hai vinto! La somma è pari come hai scelto</p>");
} else if (final_result && (user_choice == "dispari")) {
    console.log("Hai perso. Hai scelto dispari, ma la somma è pari");
    document.getElementById("final-result").insertAdjacentHTML("beforeEnd", "<p>Hai perso. Hai scelto dispari, ma la somma è pari</p>");
} else if ((final_result == false) && (user_choice == "pari")) {
    console.log("Hai perso. Hai scelto pari, ma la somma è dispari");
    document.getElementById("final-result").insertAdjacentHTML("beforeEnd", "<p>Hai perso. Hai scelto pari, ma la somma è dispari</p>");
} else {
    console.log("Hai vinto: la somma è dispari, come hai scelto!");
    document.getElementById("final-result").insertAdjacentHTML("beforeEnd", "<p>Hai vinto! La somma è dispari, come hai scelto</p>");
}

//Creo una funzione per il calcolo di un numero casuale e una per valutare se un numero è parseInt
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(number) {
    var result = false;
    if ((number % 2) == 0) {
        result = true;
    }
    return result;
}
