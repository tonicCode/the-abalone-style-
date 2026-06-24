import { Cases } from "./Cases.js";
import { Pions } from "./Pions.js";
import {Curseurs} from "./Curseur.js";

export class Plateaux {
    constructor( ) {
        this.x=97.5;
        this.y=100;
this.w=180;
this.h=180;

        this.cases = [];
        this.coordonAlphabet = [];
        this.toCreateLogicalPlateau();
        this.getCases();
        this.coordonAlphabet = [];
        this.createPions();
     this.curseurs=new Curseurs();
this.newCurseur=new Curseurs();
this.border=null;

this.ext={};
// this.limitX=null;
// this.limitY=null;


       // this.main=main;
        
    }
    toCreateLogicalPlateau() {
        this.coordonAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                this.cases.push(new Cases(x, y, this.coordonAlphabet[x] + y));
                 //console.log(this.cases);
            }
        }
    }
    getCases() {
        return this.cases;
    }
    
    createPions() {
        // range 1 player blue
        this.cases[0].pions = new Pions(0, 0, "blue", 20, 20);
        this.cases[1].pions = new Pions(1, 0, "blue", 20, 20);
        this.cases[2].pions = new Pions(2, 0, "blue", 20, 20);
        this.cases[3].pions = new Pions(3, 0, "blue", 20, 20);
        this.cases[4].pions = new Pions(4, 0, "blue", 20, 20);
        // range 2 playeur blue
        //this.cases[7].pions = 
        //new Pions(0, 1, "blue", 20, 20);
       //this.cases[8].pions = new Pions(1, 1, "blue", 20, 20);
        this.cases[9].pions = new Pions(0, 1, "blue", 20, 20);
        this.cases[10].pions = new Pions(1, 1, "blue", 20, 20);
        this.cases[11].pions = new Pions(2, 1, "blue", 20, 20);
        this.cases[12].pions = new Pions(3, 1, "blue", 20, 20);
        this.cases[13].pions = new Pions(4, 1, "blue", 20, 20);
        
        this.cases[19].pions = new Pions(4, 4, "blue", 20, 20);

        this.cases[20].pions = new Pions(4, 4, "blue", 20, 20);
        this.cases[21].pions = new Pions(4, 4, "blue", 20, 20);




        // range 3 playeur blue
        //this.cases[15].pions = new Pions(0, 1, "blue", 20, 20);
        //this.cases[16].pions = new Pions(1, 1, "blue", 20, 20);
        //this.cases[17].pions = new Pions(2, 2, "blue", 20, 20);
        // range 1 player red
        this.cases[60].pions = new Pions(6, 6, "red", 20, 20);
        this.cases[59].pions = new Pions(5, 6, "red", 20, 20);
        this.cases[58].pions = new Pions(4, 6, "red", 20, 20);
        this.cases[57].pions = new Pions(3, 6, "red", 20, 20);
        this.cases[56].pions = new Pions(2, 6, "red", 20, 20);
        // range 2 player red
        //this.cases[55].pions = new Pions(6, 5, "red", 20, 20);
        //this.cases[54].pions = new Pions(5, 5, "red", 20, 20);
       // this.cases[53].pions = new Pions(4, 5, "white", 20, 20);
        
        
        
        this.cases[51].pions = new Pions(3, 5, "red", 20, 20);
        this.cases[50].pions = new Pions(2, 5, "red", 20, 20);
        
        
        // range 3 playeur red
        this.cases[49].pions = new Pions(5, 4, "red;", 20, 20);
       this.cases[48].pions = new Pions(4, 4, "red", 20, 20);
        this.cases[47].pions = new Pions(3, 4, "red", 20, 20);
       this.cases[41].pions = new Pions(4, 4, "red", 20, 20);

        this.cases[40].pions = new Pions(4, 4, "red", 20, 20);

        this.cases[39].pions = new Pions(4, 4, "red", 20, 20);



        //console.log(this.cases);
        
        
        return this.cases;
    }
    
    
    getCase(x, y) {
        
     // console.log(this.cases)  
        
        
    return this.cases.find(c => c.x === x && c.y === y);
}
   

//creation de la zone exterieur

createOutside(){

    this.ext={posX: this.x, posY: this.y, w:this.w, h:this.h }


return this.ext;
}


   
   //creation des limites du plateau
   createBorder(){
      
     this.border={
      posX:117.5,
      posY:120,
      width:140,
      height:140
     
      }
     
     
     return this.border;  
   }
   
   
    createLimit(limit={}){

limit={h : this.border.posY, b : this.border.posY+this.border.height , l :this.border.posX , r: this.border.posX + this.border.width}




return limit;
    }




   
  
   
   toMove(direction){
    // console.log("xxxx", this.createCurseur())
//this.newCurseur=new Curseurs();

//this.limitY=this.border.posY+this.border.height;



console.log(this.createLimit());


if(direction === "bas" && this.newCurseur.posY < this.createLimit().b ){
     this.newCurseur.posY=this.curseurs.posY+=20;
}else if(direction === "haut" && this.newCurseur.posY>this.createLimit().h){
 
   this.newCurseur.posY=this.curseurs.posY-=20;


}else if(direction === "left" && this.newCurseur.posX> this.createLimit().l){

 this.newCurseur.posX=this.curseurs.posX-=20;

}else if(direction === "right" && this.newCurseur.posX < this.createLimit().r ){

 this.newCurseur.posX=this.curseurs.posX+=20;

}


     console.log("xxxx", this.newCurseur);

    //this.update();

     return this.newCurseur;
   }
   
   




   
   
    
}
//# sourceMappingURL=Plateaux.js.map