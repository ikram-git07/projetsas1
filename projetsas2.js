// menuPrincipa();
const prompt = require("prompt-sync")();
let candidat1 =[
  {
    cin : "AB123456",
    nom : "Boushaba",
    prenom : "Soufiane",
    partiPolitique : "Indépendant",
    age: 40,
    electeurs: ['ss','ee']
  },
  {
    cin : "A1234",
    nom : "arbaoui",
    prenom : "ikram",
    partiPolitique : "fleur",
    age: 19,
    electeurs: ["we890","gf3456"]
}
];
function menuPrincipal (){
     console.log("======================================================");
     console.log(" Gestion des Élections et Listes Électorales au Maroc ");
     console.log("======================================================");
        console.log("1. Ajouter un nouveau candidat");
        console.log("2. Ajouter plusieurs candidats à la fois");
        console.log("3. Afficher la liste des candidats ");
        console.log("4. Voter pour un candidat");
        console.log("5. Modifier les informations POURcandidat");
        console.log("6. Supprimer un candidat");
        console.log("7. Rechercher des candidats");
        console.log("8. Statistiques de l'élection");
        console.log("0. Quite");
        console.log("=========================================");
        let opération =Number(prompt("entrez votre choix depuis le menuPrancipal: "));
        switch(opération){
            case 1:
                AjouterUnNouveauCandidat();
                break;
            case 2:
                AjouterPlusieursCandidatsàLaFois();
                break;
            case 3:
                AfficherLaListeDesCandidats();
                break;
            case 4:
                VoterPourUnCandidat ();
                break;
            case 5:
                 ModifierLesInformationsDunCandidat();
                 break;
            case 6:
                SupprimerUnCandidat();
                break;
            case 7:
                RechercherDesCandidats();
                break;
            case 8:
                
                StatistiquesDeSelection();
                break;
            case 0:
                break

                default:
                    console.log("lopérations est introvable");
    }
}
menuPrincipal();


function AjouterUnNouveauCandidat (){
  const CIN = prompt("entrez le num de votre cin: ");

  for (let i=0; i< candidat1.length; i++){
    if (candidat1[i].cin === CIN){
        console.log("ce num de cin est deja existe ");
        return;
     }
  }

let nom = prompt("entrez votre nom: ");
let prenom = prompt("entrez votre prenom: ");
let partiPolitique = prompt("entrez votre part politique: ");
let age = Number(prompt("entrez ton age: "));

let candidat ={
    cin : CIN,
    nom : nom,
    prenom : prenom,
    partiPolitique : partiPolitique,
    age : age,
    electeurs:[]


};
candidat1.push(candidat);
console.log("c bon le candidat est ajouter ");
}
function AjouterPlusieursCandidatsàLaFois (){
    const nbrCand = Number(prompt("entrez le nombre des candidates selon votre besoin: "));
    for (let i=0; i< nbrCand; i++){
        AjouterUnNouveauCandidat()

    }
}
function AfficherLaListeDesCandidats (){
        console.log("============================")
        console.log("       mini menu            ")
        console.log("1. sorte le nombre de votes ")
        console.log("2. filtrer par parti politique")
        console.log("============================")
        let choix = Number(prompt("entrez votre choix: "))
        console.log("")
        if(choix=== 1){

            for(let i=0; i< candidat1; i++ ){
                for(let j =0; j< candidat1 - i - 1; i++){
                    if(candidat1[j].electeurs.length < candidat1[j+1].electeurs.length){
                        let taux = candidat1[j];
                        candidat1[j] = candidat1[j+1];
                       candidat1[j+1] = taux;
                    }
                }
            }   
            
            for(let i=0; i< candidat1.length; i++){
                console.log("cin" + " : " + candidat1[i].cin);
                console.log("nom" + " : " +  candidat1[i].nom );
                console.log("prenom" + " : " +  candidat1[i].prenom );
                console.log("partiPolitique" + " : " +  candidat1[i].partiPolitique );
                console.log("age" + " : " + candidat1[i].age);
                console.log("electeurs" + " : " + candidat1[i].electeurs.length);
                console.log('====================')
            }
        } 
             else if (choix === 2 ){
                let trouve=false;
                let partiPolitique =prompt("entrez le partie politique: ");
                for(let i=0; i< candidat1.length; i++){
                    if(candidat1[i].partiPolitique === partiPolitique){
                        console.log("cin" + " : " + candidat1[i].cin);
                        console.log("nom" + " : " +  candidat1[i].nom );
                        console.log("prenom" + " : " +  candidat1[i].prenom );
                        console.log("partiPolitique" + " : " +  candidat1[i].partiPolitique );
                        console.log("age" + " : " + candidat1[i].age);
                        console.log("electeurs" + " : " + candidat1[i].electeurs.length);
                        console.log('=================================================');
                                        trouve=true
                    }
                }
                if(trouve===false){
                        console.log("la candidat est introvablle");
                        menuPrincipal ()
                    }

            }
}

function VoterPourUnCandidat (){
     let cin =prompt("entrez ta propre num CIN: ");
     let dejaVote = false;
     for (let i=0; i< candidat1.length; i++){
        for (let j=0; j< candidat1[i].electeurs.length; j++){
            if (candidat1[i].electeurs[j] === cin){
                dejaVote = true;
                break;
            }
        }
            if(dejaVote ){
            break;
        }
     }
    if(dejaVote){
    console,log("Vous avez déjà voté et tu na pas le droit de modifier votre vote ni de voter à nouveau");
    return;

}
let choix = prompt("entrez le nom de candidat: ")
let trouve =false;
     for(let i=0; i< candidat1.length; i++){
            if (candidat1[i].nom === choix ){
        candidat1[i].electeurs.push(cin);
        trouve=true;
        console.log("vote save avec succes ")
        break
    
    }
}
if(!trouve) {
console.log("candidat introuvable" );
}
}


