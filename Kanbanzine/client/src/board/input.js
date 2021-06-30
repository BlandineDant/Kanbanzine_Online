import { Socket } from "socket.io-client";

export default class Input {
    constructor(scene) {
        //Bouton bleu pour le calendrier
        var bleu = scene.add.image(450, 900, 'pic').setScale(1, 1).setInteractive();
        scene.input.setDraggable(bleu);

        scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            scene.socket.emit(gameObject);
        })

        scene.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff69b4);
            scene.children.bringToTop(gameObject);
        })

        scene.input.on('dragend', function (pointer, gameObject, dropped) {
            gameObject.setTint();
            //go back to it init place
            scene.socket.emit(gameObject);
        })

        scene.input.on('drop', function (pointer, gameObject, dropZone) {
            dropZone.data.values.cards++;
            gameObject.x = (dropZone.x - 350) + (dropZone.data.values.cards * 50);
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
            scene.socket.emit(gameObject);
        })
    }
}