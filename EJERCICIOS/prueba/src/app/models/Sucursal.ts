import { Adrees } from "./Adrees";
import { Product } from "./Product";

export class Sucursal {
    id!:string;
    name!:string;
    adrees!:Adrees;
    products!:Product[];
}