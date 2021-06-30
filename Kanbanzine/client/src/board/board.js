import Card from './card';

export default class Board {
    constructor(scene) {
        this.tMission = scene.add.text(385, 1, ['Mission']).setFontSize(28).setFontFamily('Forte').setColor('#010101').disableInteractive();
        for (let i = 0; i < 6; i++) {
            let mission = new Card(scene);
            mission.render(430, 100 + (i * 130), 'mission').setScale(1.3, 1.3).disableInteractive();
        }

        var arrow_right = scene.add.image(565, 250, 'arrow_right').setScale(1, 1).setInteractive();

        this.tEtude = scene.add.text(756, 1, ['Etude']).setFontSize(28).setFontFamily('Forte').setColor('#010101').disableInteractive();
        for (let i = 0; i < 3; i++) {
            let etude1 = new Card(scene);
            etude1.render(700, 100 + (i * 130), 'etude').setScale(1.3, 1.3).disableInteractive();
        }
        for (let i = 0; i < 3; i++) {
            let etude2 = new Card(scene);
            etude2.render(880, 100 + (i * 130), 'etude_termine').setScale(1.3, 1.3).disableInteractive();
        }

        var arrow_right = scene.add.image(1020, 250, 'arrow_right').setScale(1, 1).setInteractive();

        this.tRealisation = scene.add.text(1180, 1, ['Réalisation']).setFontSize(28).setFontFamily('Forte').setColor('#010101').disableInteractive();
        for (let i = 0; i < 5; i++) {
            let realisation1 = new Card(scene);
            realisation1.render(1160, 99 + (i * 130), 'realisation').setScale(1.3, 1.3).disableInteractive();
        }
        for (let i = 0; i < 5; i++) {
            let realisation2 = new Card(scene);
            realisation2.render(1340, 100 + (i * 130), 'realisation_termine').setScale(1.3, 1.3).disableInteractive();
        }

        var arrow_rigth = scene.add.image(1475, 250, 'arrow_right').setScale(1, 1).setInteractive();

        this.tValidation = scene.add.text(1550, 1, ['Validation']).setFontSize(28).setFontFamily('Forte').setColor('#010101').disableInteractive();
        for (let i = 0; i < 3; i++) {
            let validation = new Card(scene);
            validation.render(1610, 100 + (i * 130), 'validation').setScale(1.3, 1.3).disableInteractive();
        }

        //Down
        //Supplement
        for (let i = 0; i < 2; i++) {
            let supplement = new Card(scene);
            supplement.render(700 + (i * 182), 510, 'supplement').setScale(1.3, 1.3).disableInteractive();
        }

        //Reportage 
        for (let i = 0; i < 2; i++) {
            let reportage = new Card(scene);
            reportage.render(700 + (i * 182), 645, 'reportage').setScale(1.3, 1.3).disableInteractive();
        }

        var arrow_down = scene.add.image(1610, 460, 'arrow_down').setScale(1, 1).disableInteractive();

        var kanban = scene.add.image(1610, 604, 'kanban').setScale(1.33, 1).disableInteractive();

        //Actualité
        for (let i = 0; i < 4; i++) {
            let actualite = new Card(scene);
            actualite.render(700 + (i * 182), 780, 'actualite').setScale(1.3, 1.3).disableInteractive();
        }

        //Petite Annonce
        for (let i = 0; i < 2; i++) {
            let petite_annonce = new Card(scene);
            petite_annonce.render(1428 + (i * 182), 780, 'petite_annonce').setScale(1.3, 1.3).disableInteractive();
        }

        //Calendar
        var calendar = scene.add.image(1100, 900, 'calendar').setScale(1, 1).disableInteractive();
    }
}