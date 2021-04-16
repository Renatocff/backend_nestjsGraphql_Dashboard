import { registerEnumType } from "@nestjs/graphql";

export enum tipoAtivo {
    IMOVEL = 1,
    VEICULO = 2,
    EMBARCACAO = 3
}

registerEnumType(tipoAtivo, {
    name: "tipoAtivo", // this one is mandatory
    description: "Tipo de Ativo", // this one is optional
});