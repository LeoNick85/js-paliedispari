// Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//Creo una funzione per sapere se la lunghezza della parola è pari o dispari
function isEven(parola) {
    console.log(parola.length);
    if ((parola.length % 2) == 0) {
        return true;
    } else {
        return false;
    }
}

//Creo una funzione per verificare se una parola è palindroma, trasformando la parola in array e confrontando le lettere
function isPalindromo(parola) {
    //trasformo la parola in array
    var lettere = parola.split("");
    console.log(lettere);

    //verifico le lettere da controllare a seconda che la parola sia pari o dispari
    if (isEven(parola)) {
        var controllo = parola.length / 2;
    } else {
        var controllo = ((parola.length - 1) / 2);
    }
    console.log(controllo);

    //Confronto le lettere tramite ciclo for, restituendo false in caso di non concomitanza
    var final_value = true;
    for (i=0; (i < controllo) && (final_value == true); i++) {
        if (lettere[i] == lettere[(parola.length - (i+1))]) {
            console.log(lettere[i], lettere[(parola.length - (i+1))]);
        } else {
            final_value = false;
        }
        console.log(i);
    }
    return final_value;
}

//Chiedo all'utente la parola che vuole verificare e la stampo in html
var user_choice = (prompt("inserisci una parola:"));
console.log(user_choice);
document.getElementById("user-choice").insertAdjacentHTML("afterEnd", "<p>" + user_choice + "</p>");

//Verifico se la parola dell'utente è palindroma e stampo la risposta in HTML
if (isPalindromo(user_choice)) {
    document.getElementById("result").insertAdjacentHTML("beforeEnd", "<p>Parola Palindroma!</p>");
} else {
    document.getElementById("result").insertAdjacentHTML("beforeEnd", "<p>Parola NON Palindroma!</p>");
}
