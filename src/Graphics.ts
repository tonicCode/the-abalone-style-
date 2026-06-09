import { Curseurs } from "./Curseur.js";
import { Pions } from "./Pions.js";


export class Graphics{


 public cnv : HTMLCanvasElement | null = null;
public ctx: CanvasRenderingContext2D |null = null ;
public cnvWidth:number;
public cnvHeight:number;
public  plateauPosX:number;
public plateauPosY:number;
public getX: number;
public pionsA!: Pions[];
public pionsB!:Pions[];
// public pionName!:Pions;
public plateauZoneVertical:number;
public plateauZoneHorizontal:number;


 public getY: number;


constructor(){

this.cnv=document.getElementById("cnv") as HTMLCanvasElement | null


if(this.cnv) {this.ctx=this.cnv.getContext("2d")}

this.cnvWidth=this.cnv!.width;
this.cnvHeight=this.cnv!.height;

this.plateauPosX=this.cnvWidth/4;
this.plateauPosY=this.cnvHeight/4;

this.getX=0;
this.getY=0;

this.pionsA=[];
this.pionsB=[];
this.toDrawPions();
this.plateauZoneHorizontal=140;
this.plateauZoneVertical=140;
// this.pionName;

}



toCreatePlateauDisplay(){


let caseWidth=20;
let caseHeight=20;
// let y=0;
// let x=20;
let baseRang=7;
let baseCol=7;

// let cadreExtWidth=140;
// let cadreExHeight=140;








for(let x=0; x <= 24*baseRang;x+=caseWidth ){




 for(let y=0; y <= 24*baseCol;y+=caseHeight ){


//  console.log("grille x: ", x , "y :",y);

 //A1  0, 0
 //B1  0, 20
 //C1  0, 40









             this.ctx!.strokeStyle="green";
this.ctx!.strokeRect(x + this.plateauPosX,y +this.plateauPosY,caseWidth,caseHeight)
// this.ctx!.fillText("A", x+this.plateauPosX , 100);


}



}

// sortie du plateau limite rouge

this.ctx!.strokeStyle="red";
this.ctx!.strokeRect(this.plateauPosX+20,this.plateauPosY+20,this.plateauZoneHorizontal,this.plateauZoneVertical);



}




createJeton() : [Pions[],Pions[]]{





this.getX=this.plateauPosX+20;
this.getY=this.plateauPosY+20;
 
this.pionsA.push(new Pions(this.getX,this.getY,"A1",20,20) , new Pions(this.getX+20,this.getY,"B1",20,20) , new Pions(this.getX+40 ,this.getY, "C1",20,20 ) , new Pions(this.getX+60, this.getY, "D1",20,20) , new Pions(this.getX+80 , this.getY , "E1",20,20) , new Pions(this.getX , this.getY+20 , "A2",20,20) ,new Pions (this.getX+20 , this.getY+20 , "B2",20,20) , new Pions(this.getX+40,this.getY+20,"c2",20,20),new Pions(this.getX+60,this.getY+20,"D2",20,20) , new Pions(this.getX+80,this.getY+20,"E2",20,20) ,new Pions(this.getX+20,this.getY+40,"B3",20,20),new Pions(this.getX+40,this.getY+40,"C3",20,20) ,new Pions(this.getX+60,this.getY+40,"D3",20,20)  ) ;



this.pionsB.push(new Pions(this.getX+120,this.getY+120,"A1",20,20) , new Pions(this.getX+100,this.getY+120,"G1",20,20) , new Pions(this.getX+80 ,this.getY+120, "E1",20,20 ) , new Pions(this.getX+60, this.getY+120, "D7",20,20) , new Pions(this.getX+40 , this.getY+120 , "C7",20,20) , new Pions(this.getX+120 , this.getY+100 , "B7",20,20) ,new Pions (this.getX+100 , this.getY+100 , "B2",20,20) , new Pions(this.getX+80,this.getY+100,"E6",20,20),new Pions(this.getX+60,this.getY+100,"C6",20,20) , new Pions(this.getX+40,this.getY+100,"E2",20,20) ,new Pions(this.getX+100,this.getY+80,"F5",20,20),new Pions(this.getX+80,this.getY+80,"E5",20,20) ,new Pions(this.getX+60,this.getY+80,"D5",20,20)  ) ;



return [this.pionsA,this.pionsB];
}


toDrawPions(){

  const [lesPions1, lesPions2] = this.createJeton();

for(let i=0; i<=lesPions1.length-1;i++){



// console.log("p : ", i);


    
   
    this.ctx!.fillStyle="blue";
   this.ctx!.fillRect(lesPions1[i].posX,lesPions1[i].posY,20,20);     


}


for(let j=0; j<=lesPions2.length-1;j++){



    this.ctx!.fillStyle="red";
   this.ctx!.fillRect(lesPions2[j].posX,lesPions2[j].posY,20,20);     


}





}



drawCursor(posX : number ,posY : number , width : number , height : number ) {

//  this.ctx!.clearRect(100,200,posX,posY);
this.ctx!.strokeStyle="yellow";
this.ctx!.strokeRect(posX,posY, width , height);

 


}










}
