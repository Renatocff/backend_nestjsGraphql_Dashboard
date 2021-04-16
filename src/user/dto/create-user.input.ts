import { InputType } from "@nestjs/graphql";
import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength,  } from "class-validator";
import { nivelUser } from "./nivel-user";

@InputType()
export class CreateUserInput {
    
    @IsString()
    @MinLength(3, {message: 'Campo usuário precisa ter no mínimo três caracteres'})
    @MaxLength(20, {message: 'Campo usuário não pode ultrapassar vinte caracteres'})
    @IsNotEmpty({message: 'Campo usuário não pode ser vazio.'})
    usuario!: string;

    @IsString()
    @MinLength(6, {message: 'Campo senha precisa ter no mínimo seis caracteres'})
    @MaxLength(150, {message: 'Campo senha precisa ter no máximo 150 caracteres'})
    @IsNotEmpty({message: 'Campo senha não pode ser vazio.'})
    senha!: string;

    @IsEnum(nivelUser)
    @IsNotEmpty({message: 'Campo nivel não pode ser vazio.'})
    nivel!: nivelUser;
}