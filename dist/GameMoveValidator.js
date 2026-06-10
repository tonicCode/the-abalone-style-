export class GameMoveValidator {
    constructor(groupeDePions, plateaux) {
        this.gdp = groupeDePions;
        this.plateaux = plateaux;
        this.toVerifEmptyCase();
    }
    toVerifEmptyCase() {
        let tab = this.plateaux.createPions();
        let test = "";
        tab.forEach(elem => {
            if (elem.pions === null) {
                console.log(elem.x);
                return elem.coordonnee;
            }
            // return test;
        });
    }
}
//# sourceMappingURL=GameMoveValidator.js.map