import { Graphics } from "./Graphics";
import { Pions } from "./Pions";
import { Plateaux } from "./Plateaux";

export class GameMoveValidator{

    private gdp:any;
    private plateaux:Plateaux;



constructor(groupeDePions : Graphics, plateaux: Plateaux ){

this.gdp=groupeDePions;

this.plateaux=plateaux;
this.toVerifEmptyCase();




}


toVerifEmptyCase() {


let tab=this.plateaux.createPions();
let test="";

tab.forEach(elem => {

if(elem.pions === null){

console.log(elem.x);
return elem.coordonnee;

 }


// return test;
})



}





}