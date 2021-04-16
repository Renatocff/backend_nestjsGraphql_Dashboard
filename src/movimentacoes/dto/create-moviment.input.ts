import { InputType } from "@nestjs/graphql";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { tipoMovimento } from "./tipo-movimento";

@InputType()
export class CreateMovimentInput {

    @IsEnum(tipoMovimento)
    @IsNotEmpty({message: 'Campo tipomovimento não pode ser vazio.'})
    tipomovimento!: tipoMovimento;

    @IsString()
    @IsNotEmpty({message: 'Campo descricao não pode ser vazio.'})
    descricao!: string;  

    @IsInt()
    @IsOptional()
    @IsNotEmpty({message: 'Campo valor não pode ser vazio.'})    
    valor!: number;

    @IsInt()
    @IsOptional()
    @IsNotEmpty({message: 'Campo ativoId não pode ser vazio.'})    
    ativoId?: number;

    @IsInt()
    @IsNotEmpty({message: 'Campo contaId não pode ser vazio.'})    
    contaId!: number;

    @IsInt()
    @IsOptional()
    @IsNotEmpty({message: 'Campo compraId não pode ser vazio.'})    
    compraId?: number;

    @IsInt()
    @IsNotEmpty({message: 'Campo userResponsavelId não pode ser vazio.'})
    userResponsavelId!: number;
    
}