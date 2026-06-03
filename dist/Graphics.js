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
        this.caseX = 20;
        this.caseY = 0;
    }
    toCreatePlateau() {
        let caseWidth = 20;
        let caseHeight = 20;
        // let y=0;
        // let x=20;
        let baseRang = 120;
        let baseCol = 140;
        if (this.caseX !== baseRang && this.caseY < 30) {
            this.caseX += caseWidth;
            console.log("x:", this.caseX);
        }
        else {
            // this.caseY+=caseHeight;
            this.caseX = 20;
        }
        // if(this.caseY !== baseCol){
        //     this.caseY+=caseHeight;
        // }
        this.ctx.strokeStyle = "green";
        this.ctx.strokeRect(this.caseX, this.caseY, caseWidth, caseHeight);
    }
}
//# sourceMappingURL=Graphics.js.map