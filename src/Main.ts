

import {Graphics} from './Graphics.js';
import {Pions} from './Pions.js';


class Main{

private graphics:any;


constructor(){


    this.graphics=new Graphics();
  


}

start() :void{
      this.graphics.toCreatePlateau();
      //this.graphics.createJeton();
// getComputedStyle(document.getElementById("cnv")).backgroundColor


}

loop(){

setInterval(() => {
   
// console.log("fonction !");


}, 100);

}



}

window.addEventListener("DOMContentLoaded", () => {

let main=new Main();
   main.start();
  //  main.loop();
// main.start();

});



