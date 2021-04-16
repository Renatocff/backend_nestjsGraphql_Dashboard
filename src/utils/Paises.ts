import { registerEnumType } from "@nestjs/graphql";

export enum Paises {
    BRASIL,
}

registerEnumType(Paises, {
    name: "Paises", // this one is mandatory
    description: "Listagem de Paises", // this one is optional
});