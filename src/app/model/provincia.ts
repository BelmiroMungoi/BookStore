import { Distrito } from "./distrito";

export class Provincia{

    id!: number;
    nome!: string;
    distrito = new Distrito();
}