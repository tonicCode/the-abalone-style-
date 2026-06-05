import { Curseurs } from './Curseur.js';
import { Graphics } from './Graphics.js';
import { Controls } from "./Controls.js";
class Main {
    constructor() {
        this.graphics = new Graphics();
        this.curseurs = new Curseurs(100, 120, 20, 20);
        this.controls = new Controls(this.graphics, 20, 20, this.curseurs);
    }
    start() {
        this.graphics.toCreatePlateau();
        //this.graphics.createJeton();
        // getComputedStyle(document.getElementById("cnv")).backgroundColor
    }
    loop() {
        setInterval(() => {
            // console.log("fonction !");
        }, 100);
    }
}
window.addEventListener("DOMContentLoaded", () => {
    let main = new Main();
    main.start();
    //  main.loop();
    // main.start();
});
//# sourceMappingURL=Main.js.map