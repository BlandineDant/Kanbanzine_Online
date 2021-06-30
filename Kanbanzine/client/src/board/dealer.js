import Card from './card'

export default class Dealer {
    constructor(scene) {
        var count = 0;
        var value = "";
        var listCardOut = [];
        var cardOut = "";
        this.dealCards = () => {
            //position de la carte
            let x = 112;
            let y = 712;

            //aléatoire 
            value = Phaser.Math.Between('1', '57');
            console.log(value);


            console.log(listCardOut);
            //la carte ne doit pas pioché deux fois
            listCardOut.forEach(element => {
                if (element == value){
                    cardOut = "1";
                }
            });
            if (cardOut == "1"){
                value = "";
                cardOut = 0;
            } else {
                if (listCardOut.length < 57 && count < 57){
                    //
                    listCardOut.push(value);
                }
                cardOut = 0;
            }

            //incrémenter d'un à chaque pioche
            count++;

            //appeler la classe Card pour afficher la carte 
            let playCard = new Card(scene);
            playCard.card(x, y, value);
            
        }
    }
}
