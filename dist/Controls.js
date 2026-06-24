export class Controls {
    // private widthOfCursor;
    // private heightOfCursor;
    constructor(CursorDraw, dx, dy, verify,update) {
        //  CursorDraw.drawCursor(this.posX, this.posY , this.widthOfCursor, this.heightOfCursor);
        //this.paraCurseur = paraCurseur;
        this.dx = dx;
        this.dy = dy;
    this.controlCursor = CursorDraw;
        this.verify = verify;
        //this.plat = plat;
      //  this.toPushKey();
this.btnSelect=document.getElementsByTagName("input");
       // this.toClick();
       this.update=update;
        
        
        
    }
    // pc controls
   // toMove(x, y) {
        // move vertical 
       // console.log("verify : ", this.verify.toVerifEmptyCase());
      //  if (this.plat.getCase(x, y)?.pions !== null) {
     //   }
        // this.dy=1;
        // let movePosPions= this.plat.createPions();
    //}
    toClick(moveCursor) {
        
        
        
        
        //if case.pions !== null
        // alors +1 est possible
        
        for(const ele of this.btnSelect ){
        

switch(ele.value){

case "bas":
        ele.addEventListener("click", (event) => {
           // const mouseX = event.offsetX;
            //const mouseY = event.offsetY;
   



  moveCursor.toMove("bas");   

  this.update();
     });

  break;

  case "haut":

 ele.addEventListener("click", (event) => {
           // const mouseX = event.offsetX;
            //const mouseY = event.offsetY;
      



  moveCursor.toMove("haut");   
  this.update();
     });



break;


  case "left":

 ele.addEventListener("click", (event) => {
           // const mouseX = event.offsetX;
            //const mouseY = event.offsetY;
      



  moveCursor.toMove("left");   
  this.update();
     });



break;


  case "right":

 ele.addEventListener("click", (event) => {
           // const mouseX = event.offsetX;
            //const mouseY = event.offsetY;
      



  moveCursor.toMove("right");   
  this.update();
     });




break;


}




         
        }



//   moveCursor.toMoveLef();   
//   this.update();


  //console.log("??",moveCursor.curseurs.posX);

   // this.paraCurseur.posX+=20;
   //this.plat.toMove();
 
//console.log("param curs : ",this.paraCurseur)
          
    //const cas=this.plat.getCase(2,0);
         
      // console.log(cas)

//this.plat.curseurs=this.plat.createCurseur(mouseX,mouseY,20,20);
    //console.log("lors du clicl",this.plat.curseurs)
    
   // this.updateCall();
          
          
            
            
            // pour chaque pion bleu 
          /*  this.controlCursor.pionsA.forEach(ele => {
                if (mouseX >= ele.posX && mouseX <= ele.posX + ele.width && mouseY >= ele.posY && mouseY <= ele.posY + ele.height) {
                    this.controlCursor.drawCursor(ele.posX, ele.posY, this.paraCurseur.cursorWidth, this.paraCurseur.cursorHeight);
                }
            });*/
     
    }
    toPushKey(moveCursor) {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowRight":
                  
                
  moveCursor.toMove("right");   
  this.update();
                
                
                    break;
            
                           case "ArrowLeft":
                  
                
  moveCursor.toMove("left");   
  this.update();
                
                
                    break;
            
                           case "ArrowDown":
                  
                
  moveCursor.toMove("bas");   
  this.update();
                
                
                    break;

               case "ArrowUp":
                  
                
  moveCursor.toMove("haut");   
  this.update();
                
                
                    break;










            
            
            
            
                }
        });
    }
}
//# sourceMappingURL=Controls.js.map