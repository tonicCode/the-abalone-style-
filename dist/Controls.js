export class Controls {
    // private widthOfCursor;
    // private heightOfCursor;
    constructor(CursorDraw, dx, dy, paraCurseur, plat) {
        //  CursorDraw.drawCursor(this.posX, this.posY , this.widthOfCursor, this.heightOfCursor);
        this.paraCurseur = paraCurseur;
        this.dx = dx;
        this.dy = dy;
        this.controlCursor = CursorDraw;
        this.plat = plat;
        this.toPushKey();
        this.toClick();
    }
    // pc controls
    toClick() {
        const cas = this.plat.getCase(0, 0);
        console.log("coordonnee : ", cas?.coordonnee);
        this.controlCursor.cnv.addEventListener("click", (event) => {
            const mouseX = event.offsetX;
            const mouseY = event.offsetY;
            // pour chaque pion bleu 
            this.controlCursor.pionsA.forEach(ele => {
                if (mouseX >= ele.posX && mouseX <= ele.posX + ele.width && mouseY >= ele.posY && mouseY <= ele.posY + ele.height) {
                    this.controlCursor.drawCursor(ele.posX, ele.posY, this.paraCurseur.cursorWidth, this.paraCurseur.cursorHeight);
                }
            });
        });
    }
    toPushKey() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowRight":
                    this.paraCurseur.posX += this.dx;
                    this.controlCursor.drawCursor(this.paraCurseur.posX, this.paraCurseur.posY, this.paraCurseur.cursorWidth, this.paraCurseur.cursorHeight);
                    //  console.log(event.key);
                    //  let curseurs=new Curseurs(100,100,10,10);
                    // this.controlCursor.drawCursor(100,100,10,10);
                    break;
            }
        });
    }
}
//# sourceMappingURL=Controls.js.map