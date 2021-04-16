import { registerEnumType } from "@nestjs/graphql";

export enum tipoCompra {
    DINHEIRO = 1,
    CREDITO = 2
}

registerEnumType(tipoCompra, {
    name: "tipoCompra", // this one is mandatory
    description: "Tipo de tipoCompra", // this one is optional
});