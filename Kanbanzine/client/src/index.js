import Phaser, { AUTO } from "phaser";
import Game from "./scenes/game"

const config = {
    type: Phaser.AUTO,
    parent: "phaser-container",
    dom: {
        createContainer: true
    },
    scale: {
             mode: Phaser.Scale.FIT,
             autoCenter: Phaser.Scale.CENTER_BOTH,
             width: 2000,
             height: 1010
        },
    backgroundColor: '#FEFFFE',
    width: 1900,
    height: 950,
    scene: [Game]
};

const game = new Phaser.Game(config);
