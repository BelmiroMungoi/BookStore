import { Distrito } from "./distrito";
import { Provincia } from "./provincia";

export class Cliente{

    id!: number;
    nome!: string;
    endereco!: string;
    telefone!: string;
    sexo!: string;
    interesse!: string;
    ativo!: boolean;
    distrito: Distrito = new Distrito();
}