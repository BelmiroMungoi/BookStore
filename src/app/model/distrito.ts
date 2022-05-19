import { Provincia } from "./provincia";

export class Distrito{

    id!: number;
    nome!: string;
    provincia: Provincia = new Provincia();
}