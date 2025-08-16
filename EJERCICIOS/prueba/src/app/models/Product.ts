import { Categoria } from "./Categoria";

export class Product {
    id!:number;
    name!:string;
    stock!:number;
    categoria!:Categoria;
}