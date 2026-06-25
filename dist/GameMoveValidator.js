export class GameMoveValidator {
    constructor( plateaux) {
        // this.casePions = groupeDePions;

this.isEmpty;

        this.plateaux = plateaux;
        this.toVerifEmptyCase();
    }


    


// test(){



// }





    toVerifEmptyCase() {

// if(this.plateaux.cases.pions !== null){

let rslt=this.plateaux.getCase(this.plateaux.countX, this.plateaux.countY).pions;

console.log('rslt :' ,rslt);


if(rslt !== null){
this.isEmpty=false;

//  console.log( "vous etes en : " ,this.plateaux.getCase(this.plateaux.countX, this.plateaux.countY));
}else{
    this.isEmpty=true;
}

return this.isEmpty;
            }
            // return test;
      //  });
   // }
}
//# sourceMappingURL=GameMoveValidator.js.map