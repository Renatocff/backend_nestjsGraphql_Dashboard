import { registerEnumType } from "@nestjs/graphql";

export enum tipoMovimento {
    ENTRADA = 1,
    SAIDA = 2,
}

registerEnumType(tipoMovimento, {
    name: "tipoMovimento", // this one is mandatory
    description: "Tipos de Movimento", // this one is optional
});