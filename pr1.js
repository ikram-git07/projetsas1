// // les trajet


// const prompt = require("prompt-sync")();
// const trips = [
//     {
//         id: 1,
//         departure: "Safi",
//         destination: "Youssoufia",
//         departureTime: "07:30",
//         arrivalTime: "08:30",
//         price: 25,
//         availableSeats: 50
//     },
//     {
//         id: 2,
//         departure: "Safi",
//         destination: "Marrakech",
//         departureTime: "08:00",
//         arrivalTime: "10:30",
//         price: 90,
//         availableSeats: 50
//     },
//     {
//         id: 3,
//         departure: "Safi",
//         destination: "Casablanca",
//         departureTime: "09:00",
//         arrivalTime: "13:00",
//         price: 140,
//         availableSeats: 50
//     },
//     {
//         id: 4,
//         departure: "Youssoufia",
//         destination: "Marrakech",
//         departureTime: "09:15",
//         arrivalTime: "11:00",
//         price: 65,
//         availableSeats: 50
//     },
//     {
//         id: 5,
//         departure: "Youssoufia",
//         destination: "Casablanca",
//         departureTime: "10:00",
//         arrivalTime: "13:30",
//         price: 110,
//         availableSeats: 50
//     },
//     {
//         id: 6,
//         departure: "Marrakech",
//         destination: "Casablanca",
//         departureTime: "11:30",
//         arrivalTime: "14:30",
//         price: 120,
//         availableSeats: 50
//     },
//     {
//         id: 7,
//         departure: "Marrakech",
//         destination: "Rabat",
//         departureTime: "12:00",
//         arrivalTime: "16:00",
//         price: 150,
//         availableSeats: 50
//     },
//     {
//         id: 8,
//         departure: "Casablanca",
//         destination: "Rabat",
//         departureTime: "14:00",
//         arrivalTime: "15:15",
//         price: 40,
//         availableSeats: 50
//     },
//     {
//         id: 9,
//         departure: "Casablanca",
//         destination: "Kenitra",
//         departureTime: "15:00",
//         arrivalTime: "16:45",
//         price: 55,
//         availableSeats: 50
//     },
//     {
//         id: 10,
//         departure: "Rabat",
//         destination: "Kenitra",
//         departureTime: "16:00",
//         arrivalTime: "16:45",
//         price: 30,
//         availableSeats: 50
//     },
//     {
//         id: 11,
//         departure: "Rabat",
//         destination: "Fes",
//         departureTime: "17:00",
//         arrivalTime: "19:30",
//         price: 95,
//         availableSeats: 50
//     },
//     {
//         id: 12,
//         departure: "Kenitra",
//         destination: "Fes",
//         departureTime: "17:30",
//         arrivalTime: "20:00",
//         price: 85,
//         availableSeats: 50
//     },
//     {
//         id: 13,
//         departure: "Fes",
//         destination: "Meknes",
//         departureTime: "08:30",
//         arrivalTime: "09:20",
//         price: 35,
//         availableSeats: 50
//     },
//     {
//         id: 14,
//         departure: "Fes",
//         destination: "Oujda",
//         departureTime: "10:00",
//         arrivalTime: "13:30",
//         price: 130,
//         availableSeats: 50
//     },
//     {
//         id: 15,
//         departure: "Meknes",
//         destination: "Rabat",
//         departureTime: "11:00",
//         arrivalTime: "13:30",
//         price: 80,
//         availableSeats: 50
//     },
//     {
//         id: 16,
//         departure: "Meknes",
//         destination: "Casablanca",
//         departureTime: "12:00",
//         arrivalTime: "15:00",
//         price: 105,
//         availableSeats: 50
//     },
//     {
//         id: 17,
//         departure: "Casablanca",
//         destination: "El Jadida",
//         departureTime: "16:30",
//         arrivalTime: "18:00",
//         price: 50,
//         availableSeats: 50
//     },
//     {
//         id: 18,
//         departure: "El Jadida",
//         destination: "Safi",
//         departureTime: "18:30",
//         arrivalTime: "20:30",
//         price: 60,
//         availableSeats: 50
//     },
//     {
//         id: 19,
//         departure: "Marrakech",
//         destination: "Agadir",
//         departureTime: "15:00",
//         arrivalTime: "18:30",
//         price: 100,
//         availableSeats: 50
//     },
//     {
//         id: 20,
//         departure: "Agadir",
//         destination: "Safi",
//         departureTime: "19:00",
//         arrivalTime: "22:00",
//         price: 95,
//         availableSeats: 50
//     }
// ];


menuPrincipal ();






function menuPrincipal (){
    let choix ;
do {
     console.log("================================================");
console.log("                 RAILWAY MANAGER                ");
console.log("================================================");
        console.log("1. Afficher tous les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets ");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket par nom");
        console.log("6. Filtrer trajets par ville de départ");
        console.log("7. Trier les trajets par prix");
        console.log("0. Quitter");
        console.log("=========================================");
        let choix = Number(prompt("entrez votre choix depuis le menuPrancipal"));
        switch(choix){
            case 1:
                lesTrajets();
                break;
            case 2:
                AcheterUnTicket();
                break;
            case 3:
                AfficherLesTickets();
                break;
            case 4:
                AnnulerUnTicket();
                break;
            case 5:
                 RechercherUnTicketParNom();
                 break;
            case 6:
                FiltrerTrajetsParVilleDeDépart();
                break;
            case 7:
                TrierLesTrajetsParPrix();
                break;
            case 8:
                
                choix = 0;
                break;

                default:
                    console.log("le nombre de id est introvable");
 }
        } while(choix!==0);
    }




           
    //    
// function lesTrajets() {
//     for(let i=0; i< trips.length; i++){
//         console.log("======= TRAJETS DISPONIBLES =======")
//         console.log("le iD"+trips[i].id);
//         console.log("la disstination" + " :"+trips[i].destination);
//         console.log("le depart" + " :" + trips[i].departureTime );
//         console.log("arrive" + " :" + trips[i].arrivalTime );
//         console.log("le prix" + " :"+ trips[i].price);
//         console.log("les place dispo" + " :" + trips[i].availableSeats );
//         console.log("===================================");
//     }
// }








// function AcheterUnTicket(){
//  let trajet ; 
//     const nomDuPassager =prompt("entrez votre nom");
//     let identifiantDuTrajet =Number(prompt("entrez un identifiant selon votre choix"));
// for (let i= 0; i< trips.length; i++){
//     if (trips[i].id === identifiantDuTrajet ){
//        trajet = trips[i];
// } 
// if (!trajet){
//     console.log("trajet introvable");
//     return;
// }
// if (trajet. availableSeats === 0){
//     console.log("train complet");
//     return;

// }}}
// let place = 51 - availableSeats;
// const ticket = {
//     id: ticket.length + 1,
//     nom: nomDuPassager,
//     tripId: place,
//     prix: trajet.price,
// };

