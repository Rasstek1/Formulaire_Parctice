/*function  selected(){
  alert("Vous avez cliquer sur un champs texte");
}

function envoie(){
    alert("Formulaire envoyé")
}
*/
//*****************************form 2************************

document.getElementById("inscription").addEventListener("submit", function(e) {
    //empeche le comportement par défaut du formulaire

    let erreur;
    let pseudo = document.getElementById("pseudo");//Fais appel a ID dans le html
    let email = document.getElementById("email");// ""
    let email2 = document.getElementById("email2");//""
    let mdp = document.getElementById("mdp");//""

    let inputs = document.getElementsByTagName("input");

      /*  for(let i = 0; i < inputs.lentgh; i++) {
            if (!inputs[i].value){
                erreur="Veuillez remplir tout les champs";//Remplace toute les lignes en haut
            }
    }*/


    if(!mdp.value) {
        erreur ="Veuillez inscrire un mot de passe";

    if(!pseudo.value) {
        erreur ="Veuillez inscrire un pseudo"; //si les champs ne sont pas complet--let erreur
    }
    if(!email.value) {
        erreur ="Veuillez inscrire un email";
    }

    }
    if(erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;//Call ID erreur <p> dans html
        return false;
    } else{
        alert("Formulaire envoyé !")
    }



});