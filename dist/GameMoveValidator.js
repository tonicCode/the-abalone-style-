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

// console.log('rslt :' ,rslt);


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



combinationValid(selectionPionsTab , indexX , indexY){

console.log("dans combinations : " ,selectionPionsTab, indexX , indexY);

// si selectionTab.length === 1 et que vide enface alors mouvement possible

// si selctionTab.length === 2 et que vide enface m possible


// si selectionTab.length === 3 pions cote à cote et vide ou 1 pions devant ou 2 mouvement possible 


// un mouvement cote a cote ne peut se faire que horizontal ou vertical 
let indexOfend=selectionPionsTab.length-1;


// cote a cote  h triple 

// tab[2] === posX a tab[0] + tab.length 

console.log("pos",selectionPionsTab[0].x);
console.log("size",indexOfend);




if(indexOfend > 0){
if(selectionPionsTab[1].x === selectionPionsTab[0].x + indexOfend){

    console.log("ceci est une combinaison double horizontal !")
}
} if(indexOfend > 1){

if(selectionPionsTab[2].x === selectionPionsTab[0].x+indexOfend ){

console.log("combinaison de 3 horzontal : ");


}



}



// si il y a plus de 3 pions selection m non valide 



if(indexOfend >=4){

    console.log("this movement is not valid !")
}





}





}
//# sourceMappingURL=GameMoveValidator.js.map