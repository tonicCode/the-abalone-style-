
import { Curseurs } from "./Curseur.js";
import { GameMoveValidator } from "./GameMoveValidator.js";
import { Graphics } from "./Graphics.js";
import { Pions } from "./Pions.js";
import { Plateaux } from "./Plateaux.js";

export class Controls{

    private paraCurseur: Curseurs;
    private plat!:Plateaux;
     private dx;
     private dy;
    public controlCursor;
    public verify;

    // private widthOfCursor;
    // private heightOfCursor;


 constructor(CursorDraw : Graphics, dx : number , dy :number , paraCurseur : Curseurs , plat : Plateaux , verify : GameMoveValidator){

//  CursorDraw.drawCursor(this.posX, this.posY , this.widthOfCursor, this.heightOfCursor);


this.paraCurseur=paraCurseur;
this.dx=dx;
this.dy=dy;

this.controlCursor=CursorDraw;
this.verify=verify;
this.plat=plat;
this.toPushKey();
this.toClick();





}



// pc controls

toMove(x : number , y : number){

// move vertical 
console.log("verify : ", this.verify.toVerifEmptyCase())




if(this.plat.getCase(x,y)?.pions !== null){




}



// this.dy=1;

// let movePosPions= this.plat.createPions();





    
}


toClick(){




    // const cas=this.plat.getCase(2,0);
    // console.log("coordonnee : ",cas?.coordonnee);

      

 

this.controlCursor.cnv!.addEventListener("click" , (event) =>{
  const mouseX=event.offsetX;
  const mouseY=event.offsetY;



// pour chaque pion bleu 
this.controlCursor.pionsA.forEach(ele => {

    if(mouseX >= ele.posX && mouseX <= ele.posX+ele.width && mouseY >= ele.posY && mouseY <= ele.posY+ele.height ){


this.controlCursor.drawCursor(ele.posX,ele.posY, this.paraCurseur.cursorWidth , this.paraCurseur.cursorHeight );










    }


    



   })


   })

}





toPushKey(){

  



document.addEventListener("keydown" , (event :KeyboardEvent) =>{


   

 switch(event.key){

case "ArrowRight":this.paraCurseur.posX+=this.dx;
    
this.controlCursor.drawCursor(this.paraCurseur.posX,this.paraCurseur.posY, this.paraCurseur.cursorWidth , this.paraCurseur.cursorHeight );   
//  console.log(event.key);

this.toMove(0,1+this.dy);

//  let curseurs=new Curseurs(100,100,10,10);
// this.controlCursor.drawCursor(100,100,10,10);

break;




}

});

}





}