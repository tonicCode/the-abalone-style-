import { Pions } from "./Pions.js";

export class Cases{
// [x: string]: number;

    public coordonnee :string ="";
    public pions;
    public x;
    public y;



constructor ( x: number , y:number ,coordonnee : string ="",pions : Pions | null=null ){


this.x=x;
this.y=y;
this.coordonnee=coordonnee;

this.pions=pions;

}
















}