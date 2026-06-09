import { Cases } from "./Cases.js";
import { Pions } from "./Pions.js";
export class Plateaux {
    constructor() {
        this.cases = [];
        this.toCreateLogicalPlateau();
        this.getCases();
    }
    toCreateLogicalPlateau() {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                this.cases.push(new Cases(x, y));
                // console.log(this.cases);
            }
        }
    }
    getCases() {
        const pions = new Pions(100, 140, "black", 20, 20);
        return this.cases;
    }
    getCase(x, y) {
        return this.cases.find(c => c.x === x && c.y === y);
    }
}
//# sourceMappingURL=Plateaux.js.map