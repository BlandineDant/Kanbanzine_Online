import io from 'socket.io-client';

export default class Card {
    constructor(scene) {
        //board
        this.render = (x, y, sprite) => {
            let card = scene.add.image(x, y, sprite).setScale(0.8, 0.8).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }

        //cards
        this.card = (x, y, sprite) => {
            let card = scene.add.image(x, y, sprite).setScale(0.44, 0.44).setInteractive();
            scene.input.setDraggable(card);
            return card;
        }
    }
}