//chiedo mail all'utente

const emailInput = prompt("Inserisci la tua mail");
const emailList = ["violet.smith@email.com", "klaus.smith@email.com", "sunny.smith@email.com"];
console.log(emailInput);
console.log(emailList);

let correctEmail = document.getElementById("correct-email");

// controllo se email corrisponde e stampo messaggio esito 

let result = false;

for( let i = 0; i < emailList.length; i++){
    if (emailInput === emailList[i]){
        result = true;
        console.log(emailList[i]);
        console.log(correctEmail);
    }

}

if ( result === true ) {
    correctEmail.append("L'indirizzo email è corretto");

} else {
    correctEmail.append("L'indirizzo email non è corretto o non corrisponde a nessun utente");
}