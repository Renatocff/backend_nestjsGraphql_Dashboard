import { registerEnumType } from "@nestjs/graphql";

export enum tipoConta {
    POUPANCA = 1,
    CORRENTE = 2,
}

registerEnumType(tipoConta, {
    name: "tipoConta", // this one is mandatory
    description: "Tipos de Conta", // this one is optional
});