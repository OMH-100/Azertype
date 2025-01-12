  function afficherResultat(score,nbrmotspropose){
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore =`${score}/${nbrmotspropose}`
    spanScore.innerText = affichageScore
    
}
function afficherProposition(Proposition){
  let zoneProposition= document.querySelector(".zoneProposition")
  zoneProposition.innerText= Proposition
}


function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
  location.href = mailto
}

function lancerJeu(){
  // Initialisations
  //initAddEventListenerPopup()
  let score = 0
  let i = 0
  let listeProposition = listMots

  
let inputEcriture = document.getElementById("inputEcriture")
let btnValiderMot = document.getElementById("btnValiderMot")

  afficherProposition(listeProposition[i])

  // Gestion de l'événement click sur le bouton "valider"
btnValiderMot.addEventListener("click", ()=>{
  console.log(inputEcriture.value)
  if(inputEcriture.value === listeProposition[i]){
      score++
  }
  i++
  afficherResultat(score,i)
  inputEcriture.value= ""
  if(listeProposition[i] === undefined){
      afficherProposition("le jeu est fini")
  btnValiderMot.Disabled= true
  }else{
      afficherProposition(listeProposition[i])
  }
})
      


// Gestion de l'événement change sur les boutons radios. 
let listebtnradio =document.querySelectorAll(".optionSource input")
for(let indexe = 0; indexe < listebtnradio.length; indexe++){
listebtnradio[indexe].addEventListener("change", (event)=>{
  console.log(event.target.value)
// Si c'est le premier élément qui a été modifié, alors nous voulons
// jouer avec la listeMots. 
if(event.target.value === "1"){ 
  listeProposition = listMots
}else{
// Sinon nous voulons jouer avec la liste des phrases
  listeProposition = listPhrases
}
// Et on modifie l'affichage en direct. 
afficherProposition(listeProposition[i])
})
}
//recuperer le formulaire
let  form = document.querySelector("form")
//Ecouter l'evenement
form.addEventListener("submit", (event)=>{
  //Empecher l'evenement
  event.preventDefault()

  // on recupere les deux champs et on affiche leur valeur
let baliseNom = document.getElementById("nom")
let nom= baliseNom.value
let baliseEmail = document.getElementById("e-mail")
let email = baliseEmail.value
let scoreEmail = `${score} / ${i}`
afficherEmail(nom, email, scoreEmail)
})


afficherResultat(score,i)
}




//function choisirPhrasesOuMots(){

  //let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

  //while(choix !== "mots" && choix !== "phrases")
  //{
    //choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
  //}
  //return choix
//}

//function lancerBoucleDeJeu (listPropositions){
  //let score = 0
  //for(i = 0; i < listPropositions.length; i++) {
    //let  motUtisateur = prompt(" Entrer le mot : " + listPropositions[i])
    //if(  motUtisateur === listPropositions[i]){
     // score++
  //}
  //}
  //return score
  //}



