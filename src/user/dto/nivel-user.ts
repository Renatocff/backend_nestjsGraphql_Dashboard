import { registerEnumType } from "@nestjs/graphql";

export enum nivelUser {
    USUARIO = 1,
    ADMIN = 2,
    OWNER = 3
}

registerEnumType(nivelUser, {
    name: "nivelUser", // this one is mandatory
    description: "Nível de usuário", // this one is optional
});