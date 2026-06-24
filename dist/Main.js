import { Curseurs } from './Curseur.js';
import { Graphics } from './Graphics.js';
import { Controls } from "./Controls.js";
import { GameMoveValidator } from './GameMoveValidator.js';
import { Plateaux } from './Plateaux.js';
class Main {
    constructor() {
        this.graphics = new Graphics();
        this.controls = new Controls(this.graphics, 20, 20, this.gmv ,this.update.bind(this));
   

        this.createPlateau = new Plateaux();

        this.curseurs = new Curseurs();
    
        // this.gmv = new GameMoveValidator(this.graphics, this.createPlateau);

   
   
   
  // this.start();
  // this.update();
   
    }
    start() {
         this.graphics.toCreatePlateauDisplay(this.createPlateau);
      



        this.graphics.toDrawPions(this.createPlateau);
// this.curseurs.createCurseur(this.createPlateau.createBorder().posX , this.createPlateau.createBorder().posY);
 this.graphics.drawCursor(this.createPlateau.newCurseur , this.createPlateau);

 this.createPlateau.createOutside();
this.graphics.toDrawOutside(this.createPlateau.ext);


        this.controls.toClick(this.createPlateau);
          this.controls.toPushKey(this.createPlateau);
       
// console.log(this.createPlateau.newCurseur);




     
     
       
        
        //this.update();
        
        //this.graphics.createJeton();
        // getComputedStyle(document.getElementById("cnv")).backgroundColor
    }
    
    update(){
        
                // this.createPlateau.createCurseur();

//console.log("dans update :" ,this.createPlateau.createCurseur());
        this.graphics.toCreatePlateauDisplay(this.createPlateau);
      
        this.graphics.toDrawPions(this.createPlateau);

  
this.graphics.drawCursor(this.createPlateau.newCurseur , this.createPlateau); 
        this.graphics.toDrawOutside(this.createPlateau.ext);
       // this.controls.toClick(this.createPlateau);


//    this.loop();
 

        
        
    }
    
    
    
    
    
    loop() {
        setInterval(() => {
        
    
            
            
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