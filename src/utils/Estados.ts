import { registerEnumType } from "@nestjs/graphql";

export enum Estados {
    AC,
    AL,
    AP,
    AM,
    BA,
    CE,
    DF,
    ES,
    GO,
    MA,
    MT,
    MS,
    MG,
    PA,
    PB,
    PR,
    PE,
    PI,
    RJ,
    RN,
    RS,
    RO,
    RR,
    SC,
    SP,
    SE,
    TO,
}

registerEnumType(Estados, {
    name: "Estados", // this one is mandatory
    description: "Listagem de Estados", // this one is optional
});