import { InputType } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateMovimentInput {

    @IsInt()
    @IsNotEmpty({message: 'Campo id não pode ser vazio.'})
    id!: number;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty({message: 'Campo estorno não pode ser vazio.'})
    estorno?: boolean;    

    @IsInt()
    @IsOptional()
    @IsNotEmpty({message: 'Campo ativoId não pode ser vazio.'})    
    ativoId?: number;

    @IsInt()
    @IsNotEmpty({message: 'Campo userResponsavelId não pode ser vazio.'})
    userResponsavelId!: number;
    
}