import { registerEnumType } from "@nestjs/graphql";

export enum tipoCombustivel {
    ALCOOL = 1,
    GASOLINA = 2,
    FLEX = 3,
    DIESEL = 3,
    HIBRIDO = 4,
    ELETRICO = 5, 
}

registerEnumType(tipoCombustivel, {
    name: "tipoCombustivel", // this one is mandatory
    description: "Tipo de combustivel", // this one is optional
});