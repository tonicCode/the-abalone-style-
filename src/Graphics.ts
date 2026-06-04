import { Pions } from "./Pions.js";

export class Graphics{


 public cnv : HTMLCanvasElement | null = null;
public ctx: CanvasRenderingContext2D |null = null ;
public cnvWidth:number;
public cnvHeight:number;
public  plateauPosX:number;
public plateauPosY:number;
public getX: number;
public pions!: Pions[];


constructor(){

this.cnv=document.getElementById("cnv") as HTMLCanvasElement | null


if(this.cnv) {this.ctx=this.cnv.getContext("2d")}

this.cnvWidth=this.cnv!.width;
this.cnvHeight=this.cnv!.height;

this.plateauPosX=this.cnvWidth/4;
this.plateauPosY=this.cnvHeight/4;

this.getX=0;

this.pions=[];
this.toDrawPions();

}



toCreatePlateau(){


let caseWidth=20;
let caseHeight=20;
// let y=0;
// let x=20;
let baseRang=7;
let baseCol=7;

let cadreExtWidth=140;
let cadreExHeight=140;








for(let x=1; x <= 24*baseRang;x+=caseWidth ){




 for(let y=1; y <= 24*baseCol;y+=caseHeight ){






             this.ctx!.strokeStyle="green";
this.ctx!.strokeRect(x + this.plateauPosX,y +this.plateauPosY,caseWidth,caseHeight)
// this.ctx!.fillText("A", x+this.plateauPosX , 100);


}



}

// sortie du plateau limite rouge

this.ctx!.strokeStyle="red";
this.ctx!.strokeRect(this.plateauPosX+20,this.plateauPosY+20,cadreExtWidth,cadreExHeight);


}




createJeton() : Pions[]{

    // this.pions:Pions[]=[];


this.pions.push(new Pions(this.getX,this.plateauPosY,1) , new Pions(10,10,2)) ;

console.log(this.getX)
// this.ctx!.fillStyle="blue";
// this.ctx!.fillRect(this.getX,0,10,10);


return this.pions;
}


toDrawPions(){

this.ctx!.fillRect(this.createJeton()[0].posX,this.createJeton()[0].posY,10,10);


}














}
