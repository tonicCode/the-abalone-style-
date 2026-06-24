import { Pions } from "./Pions.js";
import {Plateaux} from './Plateaux.js';

export class Graphics {
    constructor() {
        this.cnv = null;
        this.ctx = null;
        this.cnv = document.getElementById("cnv");
        if (this.cnv) {
            this.ctx = this.cnv.getContext("2d");
        }
        this.cnvWidth = this.cnv.width;
        this.cnvHeight = this.cnv.height;
        this.plateauPosX = this.cnvWidth / 4;
        this.plateauPosY = this.cnvHeight / 4;
        this.getX = 0;
        this.getY = 0;
        this.pionsA = [];
        this.pionsB = [];
        this.outsideX=20;
        this.outsideY=20;
        //this.plateau=[];
      //  this.pions=Pions;
       // this.plateaux=Plateaux;
        
        
        this.plateauZoneHorizontal = 140;
        this.plateauZoneVertical = 140;
        // this.pionName;
    }
    toCreatePlateauDisplay(cp) {
        let caseWidth = 20;
        let caseHeight = 20;
        // let y=0;
        // let x=20;
        //let baseRang = 7;
        //let baseCol = 7;
       // let x=cp.cases;
        // let cadreExtWidth=140;
        // let cadreExHeight=140;
        
        
        for(const c of cp.cases){
       //console.log("??",c)
        
        
        
        
      //  for (let x=0; x <= 160; x += caseWidth) {
    // for (let y = 0;y <= c.y; y += caseHeight) {
                //  console.log("grille x: ", x , "y :",y);
                //A1  0, 0
                //B1  0, 20
                //C1  0, 40
                this.ctx.strokeStyle = "green";
        this.ctx.strokeRect(c.x *caseWidth+ this.plateauPosX, c.y *caseHeight+ this.plateauPosY, caseWidth, caseHeight);
                // this.ctx!.fillText("A", x+this.plateauPosX , 100);
           // }
      //  }
            
            
        }
        
        // sortie du plateau limite rouge
        this.ctx.strokeStyle = "red";
      
      
     // console.log("€#@",cp.createBorder().posX)
        
   this.ctx.strokeRect(cp.createBorder().posX
 , cp.createBorder().posY , cp.createBorder().width, cp.createBorder().height
);
   
 
   
    }
 
    // draw outside 

    toDrawOutside(createOutside){
console.log(" out :",createOutside)


 this.ctx.strokeStyle="yellow";
this.ctx.strokeRect(createOutside.posX, createOutside.posY , createOutside.w , createOutside.h);



    }





    toDrawPions(c) {
     let pionsWidth=20;
     let pionsHeight=20;
        
        
        for(const p of c.cases){
        
        
       // for (let i = 0; i <= c.cases.length - 1; i++) {
            // console.log("p : ", i);
            
     if(p.pions){
        
        //A0
    this.ctx.fillStyle = p.pions.color;
        //console.log("%?" ,p.pions)
    
       
        this.ctx.fillRect(p.x*pionsWidth+this.plateauPosX+this.outsideX,p.y*pionsHeight+this.plateauPosY+this.outsideY,pionsWidth,pionsHeight)
         
         
     }
        
        
     // console.log(c.cases[i]);

      
            
       /*   if(c.cases[i].pions){
        this.ctx.fillRect(c.cases[i].pions.posX, c.case[i].pions.posY, 20, 20);
          }*/
        }
       /* for (let j = 0; j <= lesPions2.length - 1; j++) {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(lesPions2[j].posX, lesPions2[j].posY, 20, 20);
        }*/
    }
    drawCursor(curseurs , cp) {
      
 
       
        this.ctx.clearRect(0,0,this.cnv.width,this.cnv.height);
  
        //redessine pions et plateau apres avancement du curseur  
  this.toCreatePlateauDisplay(cp); 
this.toDrawPions(cp);
        this.ctx.strokeStyle="yellow";

  
// if(!curseurs) return;
  // console.log("dessine",curseurs.posX  );

this.ctx.strokeRect(curseurs.posX,curseurs.posY
,curseurs.cursorWidth,curseurs.cursorHeight);
   
// this.toCreatePlateauDisplay(cp);

  // this.main.update();

   
   
   
    }
}
//# sourceMappingURL=Graphics.js.map