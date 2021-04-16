import { InputType } from "@nestjs/graphql";
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength,  } from "class-validator";
import { nivelUser } from "./nivel-user";

@InputType()
export class UpdateUserInput {   
    
    @IsString()    
    @MinLength(6, {message: 'Campo senha precisa ter no mínimo seis caracteres'})
    @MaxLength(150, {message: 'Campo senha precisa ter no máximo 150 caracteres'})
    @IsOptional()
    @IsNotEmpty({message: 'Campo senha não pode ser vazio.'})
    senha?: string;
    
    @IsEnum(nivelUser)
    @IsOptional()
    @IsNotEmpty({message: 'Campo nivel não pode ser vazio.'})
    nivel?: nivelUser;
    
    @IsBoolean()   
    @IsOptional()
    @IsNotEmpty({message: 'Campo ativo não pode ser vazio.'})
    ativo?: boolean;
}