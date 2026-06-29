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
    toClick(moveCursor,gmv) {
        
        
     
        
        //if case.pions !== null
        // alors +1 est possible
        
        for(const ele of this.btnSelect ){
        

switch(ele.value){
   
case "valid" : ele.addEventListener("click", (event) => {

gmv.combinationValid(moveCursor.selectionsPions,moveCursor.countX , moveCursor.countY);
//  console.log(";;;;;" , moveCursor.selectionsPions , moveCursor.countX,moveCursor.countY)

})



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




     
    }

// control clavier pc 



//curseur touche ->  <- 

    toPushKey(moveCursor, validator) {

   

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



// touche enter validation 



 case "Enter" : validator.toVerifEmptyCase();
 moveCursor.createSelection();
 
 
 break;







            
            
            
            
                }
        });
    }
}
//# sourceMappingURL=Controls.js.map