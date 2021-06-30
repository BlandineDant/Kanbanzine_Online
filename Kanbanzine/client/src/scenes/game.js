import io from 'socket.io-client';
import Board from '../board/board';
import Dealer from "../board/dealer";
import Input from '../board/input';
import Card from '../board/card';
import { Loader } from 'phaser';

var form;
var count = 0;
var value = "";
var listCardOut = [];
var cardOut = "";
export default class Game extends Phaser.Scene {

    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {

        //#region Board
        //Up
        this.load.image('mission', 'src/assets/missions.png');
        this.load.image('etude', 'src/assets/etude.png');
        this.load.image('etude_termine', 'src/assets/etude_termine.png');
        this.load.image('realisation', 'src/assets/realisation.png');
        this.load.image('realisation_termine', 'src/assets/realisation_termine.png');
        this.load.image('validation', 'src/assets/validation.png');

        //Down
        this.load.image('actualite', 'src/assets/actualite.png');
        this.load.image('supplement', 'src/assets/supplement.png');
        this.load.image('reportage', 'src/assets/reportage.png');
        this.load.image('petite_annonce', 'src/assets/petite_annonce.png');

        //Calendar
        this.load.image('calendar', 'src/assets/calendar.png');

        //Card
        //#region Cards
        this.load.image('1', 'src/assets/cards/01.png');
        this.load.image('2', 'src/assets/cards/02.png');
        this.load.image('3', 'src/assets/cards/03.png');
        this.load.image('4', 'src/assets/cards/04.png');
        this.load.image('5', 'src/assets/cards/05.png');
        this.load.image('6', 'src/assets/cards/06.png');
        this.load.image('7', 'src/assets/cards/07.png');
        this.load.image('8', 'src/assets/cards/08.png');
        this.load.image('9', 'src/assets/cards/09.png');
        this.load.image('10', 'src/assets/cards/10.png');
        this.load.image('11', 'src/assets/cards/11.png');
        this.load.image('12', 'src/assets/cards/12.png');
        this.load.image('13', 'src/assets/cards/13.png');
        this.load.image('14', 'src/assets/cards/14.png');
        this.load.image('15', 'src/assets/cards/15.png');
        this.load.image('16', 'src/assets/cards/16.png');
        this.load.image('17', 'src/assets/cards/17.png');
        this.load.image('18', 'src/assets/cards/18.png');
        this.load.image('19', 'src/assets/cards/19.png');
        this.load.image('20', 'src/assets/cards/20.png');
        this.load.image('21', 'src/assets/cards/21.png');
        this.load.image('22', 'src/assets/cards/22.png');
        this.load.image('23', 'src/assets/cards/23.png');
        this.load.image('24', 'src/assets/cards/24.png');
        this.load.image('25', 'src/assets/cards/25.png');
        this.load.image('26', 'src/assets/cards/26.png');
        this.load.image('27', 'src/assets/cards/27.png');
        this.load.image('28', 'src/assets/cards/28.png');
        this.load.image('29', 'src/assets/cards/29.png');
        this.load.image('30', 'src/assets/cards/30.png');
        this.load.image('31', 'src/assets/cards/31.png');
        this.load.image('32', 'src/assets/cards/32.png');
        this.load.image('33', 'src/assets/cards/33.png');
        this.load.image('34', 'src/assets/cards/34.png');
        this.load.image('35', 'src/assets/cards/35.png');
        this.load.image('36', 'src/assets/cards/36.png');
        this.load.image('37', 'src/assets/cards/37.png');
        this.load.image('38', 'src/assets/cards/38.png');
        this.load.image('39', 'src/assets/cards/39.png');
        this.load.image('40', 'src/assets/cards/40.png');
        this.load.image('41', 'src/assets/cards/41.png');
        this.load.image('42', 'src/assets/cards/42.png');
        this.load.image('43', 'src/assets/cards/43.png');
        this.load.image('44', 'src/assets/cards/44.png');
        this.load.image('45', 'src/assets/cards/45.png');
        this.load.image('46', 'src/assets/cards/46.png');
        this.load.image('47', 'src/assets/cards/47.png');
        this.load.image('48', 'src/assets/cards/48.png');
        this.load.image('49', 'src/assets/cards/49.png');
        this.load.image('50', 'src/assets/cards/50.png');
        this.load.image('51', 'src/assets/cards/51.png');
        this.load.image('52', 'src/assets/cards/52.png');
        this.load.image('53', 'src/assets/cards/53.png');
        this.load.image('54', 'src/assets/cards/54.png');
        this.load.image('55', 'src/assets/cards/55.png');
        this.load.image('56', 'src/assets/cards/56.png');
        this.load.image('57', 'src/assets/cards/57.png');
        //#endregion

        //Formulaire pour la modification d'une carte
        this.load.html('form', 'src/assets/html/form.html');
        //Fichier xml
        //this.load.text('filexml', 'src/assets/cardsTEST.xml');

        //Others
        this.load.image('arrow_right', 'src/assets/arrow_right.png');
        this.load.image('arrow_down', 'src/assets/arrow_down.png');
        this.load.image('kanban', 'src/assets/kanban.png');
        this.load.image('pic', 'src/assets/cercleBleu3.png');
        //#endregion

        //Buttons
        this.load.image('button', 'src/assets/button.png');
        this.load.image('buttonHover', 'src/assets/buttonHover.png');

        //HTML pages
        this.load.html('diagrammeFluxCumules', '/src/assets/html/diagrammeFluxCumules.html');
    }

    create() {
        //user
        let self = this;

        //Others
        this.dealer = new Dealer(this);
        this.board = new Board(this);
        this.date_input = new Input(this);

        //---------------------------------------------------------//

        //socket connection
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', function () {
            console.log('Connected!');
        });

        //bouton démarrer la partie
        this.startText = this.add.text(20, 400, ['Démarrer la partie']).setFontSize(26).setFontFamily('Cooper Black').setColor('#31339E').setInteractive();
        //bouton piocher une carte
        this.dealText = this.add.text(20, 800, ['Piocher une carte']).setFontSize(26).setFontFamily('Cooper Black').setColor('#31339E').setInteractive();
        //Mettre le bouton en invisible 
        this.dealText.alpha = 0;

        //bouton modifier une carte
        this.editText = this.add.text(30, 550, ['Modifier une carte']).setFontSize(24).setFontFamily('Cooper Black').setColor('#31339E').setInteractive();
        //Mettre le bouton en invisible  
        this.editText.alpha = 0;

        //bouton valider 
        this.valideEdit = this.add.text(80, 550, ['Valider']).setFontSize(24).setFontFamily('Cooper Black').setColor('#31339E').setInteractive();
        //Mettre le bouton en invisible 
        this.valideEdit.alpha = 0;

        //distribuer cartes
        this.socket.on('dealCards', function () {
            //appeler la fonction dealCards
            self.dealCards();

        })

        //#region Distribution de carte
        this.dealCards = () => {
            //aléatoire 
            value = Phaser.Math.Between('1', '57');

            //la carte ne doit pas pioché deux fois
            listCardOut.forEach(element => {
                if (element == value) {
                    cardOut = "1";
                }
            });
            if (cardOut == "1") {
                value = "";
                cardOut = 0;
            } else {
                if (listCardOut.length < 57 && count < 57) {
                    //
                    listCardOut.push(value);
                }
                cardOut = 0;
            }

            //incrémenter d'un à chaque pioche
            count++;
            if (value != "" || value != 0) {
                //appeler la focntion showCard
                self.showCard(value);
            }
        }

        this.showCard = (value) => {
            //position de la carte
            let x = 112;
            let y = 712;
            //instancier la classe Card pour afficher la carte 
            let playCard = new Card(this);
            playCard.card(x, y, value);
        }
        //#endregion

        //#region Piocher carte
        this.startText.on('pointerdown', function () {
            self.socket.emit("change");
            //Mettre le bouton en invisible 
            self.startText.alpha = 0;
            //Mettre le bouton en visible 
            self.dealText.alpha = 1;
        })

        //action sur le texte
        this.dealText.on('pointerdown', function () {
            self.socket.emit("dealCards");
            //Mettre le bouton en visible 
            self.editText.alpha = 1;

        })

        //changer la couleur du texte quand on passe dessus avec la souris
        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#C26ABB');
        })

        //revenir à sa couleur initiale
        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#31339E');
        })
        //#endregion

        //#region edit card
        this.editText.on('pointerdown', function () {
            self.editCards();
            //Mettre le bouton en visible 
            self.valideEdit.alpha = 1;
            //Mettre le bouton en invisible 
            self.editText.alpha = 0;
        })

        //changer la couleur du texte quand on passe dessus avec la souris
        this.editText.on('pointerover', function () {
            self.editText.setColor('#C26ABB');
        })

        //revenir à sa couleur initiale
        this.editText.on('pointerout', function () {
            self.editText.setColor('#31339E');
        })

        this.editCards = () => {
            this.form = this.add.dom(100, 280).createFromCache('form');
            //Mettre le bouton en visible 
            this.form.alpha = 1;
            this.form.setPerspective(1000);
        }

        this.valideEdit.on('pointerdown', function () {
            //Mettre le bouton en invisible 
            self.form.alpha = 0;
            //Mettre le bouton en invisible 
            self.valideEdit.alpha = 0;
            //Mettre le bouton en visible 
            self.editText.alpha = 1;
        })

        //changer la couleur du texte quand on passe dessus avec la souris
        this.valideEdit.on('pointerover', function () {
            self.valideEdit.setColor('#C26ABB');
        })

        //revenir à sa couleur initiale
        this.valideEdit.on('pointerout', function () {
            self.valideEdit.setColor('#31339E');
        })
        //#endregion

        //#region déplacer la carte
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff69b4);
            self.children.bringToTop(gameObject);
        })

        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.setTint();
        })

        this.input.on('drop', function (pointer, gameObject) {
            self.socket.emit(gameObject);
        })
        //#endregion

    }

    update() {

    }
}
