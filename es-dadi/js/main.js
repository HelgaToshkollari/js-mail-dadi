const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click",
    function (){
        //numero random tra 1 a 6 dell'utente
        const userNbr = Math.floor (Math.random() * 6 + 1 );
        console.log("user", userNbr);
        //numero random del computer
        const pcNbr = Math.floor(Math.random () * 6 + 1 );
        console.log("pc", pcNbr);

        //risultato della partita
        

        if (userNbr < pcNbr ){
            result.innerHTML = (" YOU LOST" +"!" +  " you got " + userNbr + " the pc got " + pcNbr);

        } else if (userNbr > pcNbr) {
            result.innerHTML = (" YOU WON" + "!" + " you got " + userNbr + " the pc got " + pcNbr);

        } else{
            result.innerHTML = ("IT'S A DRAW");
        }


    }



)