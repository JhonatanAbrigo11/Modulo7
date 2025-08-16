import { Adrees } from "./Adrees";
import { Sucursal } from "./Sucursal";

export class Company {
    id!:string;
    ruc!:string;
    name!:string;
    adress!:Adrees;
    sucursal!:Sucursal[];
}