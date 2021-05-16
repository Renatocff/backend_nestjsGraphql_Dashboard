import { InputType } from "@nestjs/graphql";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength,  } from "class-validator";
import { tipoConta } from "./tipo-conta";


@InputType()
export class UpdateContaInput {
   
    @IsString()
    @IsOptional()
    @MinLength(3, {message: 'O campo agencia precisa ter no mínimo 3 caracteres'})
    @MaxLength(15, {message: 'O campo agencia não pode ultrapassar 15 caracteres'})
    @IsNotEmpty({message: 'Campo Agência não pode ser vazio.'})
    agencia?: string;

    @IsString()
    @IsOptional()
    @MinLength(3, {message: 'O campo nrconta precisa ter no mínimo 3 caracteres'})
    @MaxLength(15, {message: 'O campo nrconta não pode ultrapassar 15 caracteres'})
    @IsNotEmpty({message: 'Campo conta não pode ser vazio.'})
    nrconta?: string;

    @IsEnum(tipoConta)
    @IsOptional()
    @IsNotEmpty({message: 'Campo tipoconta não pode ser vazio.'})
    tipoconta?: tipoConta;

    @IsString()
    @IsOptional()
    @MinLength(5, {message: 'O campo banco precisa ter no mínimo 5 caracteres'})
    @MaxLength(50, {message: 'O campo nrconta não pode ultrapassar 50 caracteres'})
    @IsNotEmpty({message: 'Campo banco não pode ser vazio.'})
    banco?: string;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty({message: 'Campo ativo do tipo Boolean não pode ser vazio.'})
    ativo?: boolean;

    @IsInt()
    @IsNotEmpty({message: 'Campo userId não pode ser vazio.'})
    userId!: number;    
    
}