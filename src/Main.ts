

import {Graphics} from './Graphics.js';


class Main{

private graphics:any;


constructor(){


    this.graphics=new Graphics();
  


}

start() :void{
    
// getComputedStyle(document.getElementById("cnv")).backgroundColor


}

loop(){

setInterval(() => {
   
// console.log("fonction !");
  this.graphics.toCreatePlateau();

}, 100);

}



}

window.addEventListener("DOMContentLoaded", () => {

let main=new Main();
   main.start();
   main.loop();
// main.start();

});



