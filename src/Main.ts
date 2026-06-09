

import { Curseurs } from './Curseur.js';
import {Graphics} from './Graphics.js';
import {Pions} from './Pions.js';
import { Controls } from "./Controls.js";
import { GameMoveValidator } from './GameMoveValidator.js';
import { Plateaux } from './Plateaux.js';


class Main{

private graphics:any;
private controls:any;
private curseurs:any;
private mesPions!:Pions;
private gmv:any;
private createPlateau!:any;



constructor(){


    this.graphics=new Graphics();
    this.curseurs=new Curseurs(100,120,20,20);
    this.createPlateau= new Plateaux();
    this.controls=new Controls(this.graphics , 20 , 20 ,this.curseurs, this.createPlateau);

    this.gmv=new GameMoveValidator(this.graphics);


}

start() :void{
      this.graphics.toCreatePlateauDisplay();
      
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



