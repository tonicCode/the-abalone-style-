import { Graphics } from './Graphics.js';
class Main {
    constructor() {
        this.graphics = new Graphics();
    }
    start() {
        this.graphics.toCreatePlateau();
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