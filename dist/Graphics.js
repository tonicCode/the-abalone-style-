export class Graphics {
    constructor() {
        this.cnv = null;
        this.ctx = null;
        this.cnv = document.getElementById("cnv");
        if (this.cnv) {
            this.ctx = this.cnv.getContext("2d");
        }
        this.cnvWidth = this.cnv.width;
        this.cnvHeight = this.cnv.height;
        this.plateauPosX = this.cnvWidth / 4;
        this.plateauPosY = this.cnvHeight / 4;
    }
    toCreatePlateau() {
        let caseWidth = 20;
        let caseHeight = 20;
        // let y=0;
        // let x=20;
        let baseRang = 7;
        let baseCol = 7;
        let cadreExtWidth = 140;
        let cadreExHeight = 140;
        // sortie du plateau limite rouge  
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(this.plateauPosX + 20, this.plateauPosY + 20, cadreExtWidth, cadreExHeight);
        for (let x = 1; x <= 24 * baseRang; x += caseWidth) {
            for (let y = 1; y <= 24 * baseCol; y += caseHeight) {
                this.ctx.strokeStyle = "green";
                this.ctx.strokeRect(x + this.plateauPosX, y + this.plateauPosY, caseWidth, caseHeight);
            }
        }
    }
}
//# sourceMappingURL=Graphics.js.map