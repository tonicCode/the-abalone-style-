import { Cases } from "./Cases.js";
import { Pions } from "./Pions.js";


export class Plateaux{

public cases:Cases[]=[];
public coordonAlphabet:string[]=[];


constructor(){

this.toCreateLogicalPlateau();
this.getCases();
this.coordonAlphabet=[];
this.createPions();


}


toCreateLogicalPlateau(){

this.coordonAlphabet=["A","B","C","D","E","F","G"];



for(let y=0 ; y <7; y++ ){


for(let x=0 ; x <7; x++ ){


this.cases.push( new Cases(x,y,this.coordonAlphabet[x]+y));

//  console.log(this.cases);


}




}


}





getCases() : Cases[]{




    

return this.cases;
}



getCase(x: number , y:number) : Cases | undefined {


    return this.cases.find(c => c.x === x && c.y === y);
}


createPions() {


    
// range 1 player blue
this.cases[0].pions=new Pions(0,0,"blue",20,20);
this.cases[1].pions=new Pions(1,0,"blue",20,20);
this.cases[2].pions=new Pions(2,0,"blue",20,20);
this.cases[3].pions=new Pions(3,0,"blue",20,20);
this.cases[4].pions=new Pions(4,0,"blue",20,20);

// range 2 playeur blue
this.cases[7].pions=new Pions(0,1,"blue",20,20);
this.cases[8].pions=new Pions(1,1,"blue",20,20);
this.cases[9].pions=new Pions(2,2,"blue",20,20);
this.cases[10].pions=new Pions(3,3,"blue",20,20);
this.cases[11].pions=new Pions(4,4,"blue",20,20);

// range 3 playeur blue
this.cases[15].pions=new Pions(0,1,"blue",20,20);
this.cases[16].pions=new Pions(1,1,"blue",20,20);
this.cases[17].pions=new Pions(2,2,"blue",20,20);



// range 1 player red
this.cases[48].pions=new Pions(6,6,"red",20,20);
this.cases[47].pions=new Pions(5,6,"blue",20,20);
this.cases[46].pions=new Pions(4,6,"blue",20,20);
this.cases[45].pions=new Pions(3,6,"blue",20,20);
this.cases[44].pions=new Pions(2,6,"blue",20,20);


// range 2 player red
this.cases[41].pions=new Pions(6,5,"red",20,20);
this.cases[40].pions=new Pions(5,5,"red",20,20);
this.cases[39].pions=new Pions(4,5,"red",20,20);
this.cases[38].pions=new Pions(3,5,"red",20,20);
this.cases[37].pions=new Pions(2,5,"red",20,20);

// range 3 playeur red
this.cases[33].pions=new Pions(5,4,"red;",20,20);
this.cases[32].pions=new Pions(4,4,"red;",20,20);
this.cases[31].pions=new Pions(3,4,"red;",20,20);









return this.cases;
}







}