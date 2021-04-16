import { InputType } from "@nestjs/graphql";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Estados } from "../../utils/Estados";
import { Paises } from "../../utils/Paises";
import { tipoAtivo } from "./tipo-ativo";
import { tipoCombustivel } from "./tipo-combustivel";
import { tipoCompra } from "./tipo-compra";

@InputType()
export class UpdateAtivoInput {

    @IsEnum(tipoAtivo)
    @IsNotEmpty({message: 'Campo tipoAtivo não pode ser vazio.'})
    tipoAtivo?: tipoAtivo;

    @IsEnum(tipoCompra)
    @IsNotEmpty({message: 'Campo tipocompra não pode ser vazio.'})
    tipocompra?: tipoCompra;

    @IsString()
    @MinLength(5, {message: 'O campo descricao não pode ser menor que 5 caracteres.'})
    @MaxLength(80, {message: 'O campo descricao não pode ultrapassar 80 caracteres.'})
    @IsNotEmpty({message: 'Campo descricao não pode ser vazio.'})
    descricao?: string;
        
    @IsString()
    @MinLength(5, {message: 'O campo nomeProprietario não pode ser menor que 5 caracteres.'})
    @MaxLength(80, {message: 'O campo nomeProprietario não pode ultrapassar 80 caracteres.'})
    @IsNotEmpty({message: 'Campo nomeProprietario não pode ser vazio.'})
    nomeProprietario?: string;

    @IsString()
    @MinLength(5, {message: 'O campo donoReal não pode ser menor que 5 caracteres.'})
    @MaxLength(80, {message: 'O campo donoReal não pode ultrapassar 80 caracteres.'})
    @IsNotEmpty({message: 'Campo donoReal não pode ser vazio.'})
    donoReal?: string;

    @IsEnum(Paises)
    @IsNotEmpty({message: 'Campo pais não pode ser vazio.'})
    pais?: Paises

    @IsEnum(Estados)
    @IsNotEmpty({message: 'Campo uf não pode ser vazio.'})
    uf?: Estados;

    @IsString()
    @MinLength(5, {message: 'O campo cidade não pode ser menor que 5 caracteres.'})
    @MaxLength(50,{message: 'O campo cidade não pode ultrapassar 50 caracteres.'})
    @IsNotEmpty({message: 'Campo cidade não pode ser vazio.'})
    cidade?: string;

    @IsString()
    @MinLength(8, {message: 'O campo codPostal precisa ter no mínimo 8 caracteres'})
    @MaxLength(9, {message: 'O campo codPostal não pode ultrapassar 9 caracteres'})
    @IsNotEmpty({message: 'Campo codPostal não pode ser vazio.'})
    codPostal?: string;

    @IsString()
    @MinLength(8, {message: 'O campo endereco não pode ser menor que 8 caracteres.'})
    @MaxLength(80, {message: 'O campo endereco não pode ultrapassar 80 caracteres.'})
    @IsNotEmpty({message: 'Campo endereco não pode ser vazio.'})
    endereco?: string;

    @IsString()
    @MinLength(0, {message: 'O campo nr precisa ter no mínimo 1 caracteres'})
    @MaxLength(5, {message: 'O campo nr não pode ultrapassar 5 caracteres'})
    @IsNotEmpty({message: 'Campo nr não pode ser vazio.'})
    nr?: string;

    @IsString()
    @IsOptional()
    complemento?: string; 

    @IsString()
    @MinLength(3, {message: 'O campo bairro precisa ter no mínimo 3 caracteres'})
    @MaxLength(50, {message: 'O campo bairro não pode ultrapassar 50 caracteres'})
    @IsNotEmpty({message: 'Campo bairro não pode ser vazio.'})
    bairro?: string;

    @IsInt()
    @IsNotEmpty({message: 'Campo idUsuario não pode ser vazio.'})
    idUsuario?: number;

    @IsInt()
    @IsOptional()
    @IsNotEmpty({message: 'Campo idMovimento não pode ser vazio.'})
    idMovimento?: number;    

    @IsString()
    @MinLength(4, {message: 'O campo nrimovel precisa ter no mínimo 4 caracteres'})
    @MaxLength(20, {message: 'O campo nrimovel não pode ultrapassar 20 caracteres'})
    @IsOptional()
    nrimovel?: string;

    @IsInt()
    @MinLength(10, {message: 'O campo renavam precisa ter no mínimo 10 caracteres'})
    @MaxLength(11, {message: 'O campo renavam não pode ultrapassar 11 caracteres'})
    @IsOptional()
    renavam?: number;

    @IsString()
    @MinLength(7, {message: 'O campo renavam precisa ter no mínimo 7 caracteres'})
    @MaxLength(8, {message: 'O campo renavam não pode ultrapassar 8 caracteres'})
    @IsOptional()
    placa?: string;

    @IsInt()
    @MinLength(3, {message: 'O campo anoModelo precisa ter no mínimo 3 caracteres'})
    @MaxLength(4, {message: 'O campo anoModelo não pode ultrapassar 4 caracteres'})
    @IsOptional()
    anoModelo?: number;

    @IsInt()
    @MinLength(3, {message: 'O campo anoFab precisa ter no mínimo 3 caracteres'})
    @MaxLength(4, {message: 'O campo anoFab não pode ultrapassar 4 caracteres'})
    @IsOptional()
    anoFab?: number;

    @IsInt()
    @MinLength(3, {message: 'O campo exercicio precisa ter no mínimo 3 caracteres'})
    @MaxLength(4, {message: 'O campo exercicio não pode ultrapassar 4 caracteres'})
    @IsOptional()
    exercicio?: number;

    @IsString()
    @MinLength(3, {message: 'O campo marca precisa ter no mínimo 3 caracteres'})
    @MaxLength(15, {message: 'O campo marca não pode ultrapassar 15 caracteres'})
    @IsOptional()
    marca?: string;

    @IsString()
    @MinLength(3, {message: 'O campo modelo precisa ter no mínimo 3 caracteres'})
    @MaxLength(4, {message: 'O campo modelo não pode ultrapassar 4 caracteres'})
    @IsOptional()
    modelo?: string;

    @IsString()
    @MinLength(3, {message: 'O campo versao precisa ter no mínimo 3 caracteres'})
    @MaxLength(15, {message: 'O campo versao não pode ultrapassar 15 caracteres'})
    @IsOptional()
    versao?: string;

    @IsString()
    @MinLength(5, {message: 'O campo chassi precisa ter no mínimo 5 caracteres'})
    @MaxLength(35, {message: 'O campo chassi não pode ultrapassar 35 caracteres'})
    @IsOptional()
    chassi?: string;

    @IsString()
    @MinLength(3, {message: 'O campo cor precisa ter no mínimo 3 caracteres'})
    @MaxLength(15, {message: 'O campo cor não pode ultrapassar 15 caracteres'})
    @IsOptional()
    cor?: string;

    @IsEnum(tipoCombustivel)
    @IsOptional()
    combustivel?: tipoCombustivel;

    @IsString()
    @MinLength(5, {message: 'O campo nrMotor precisa ter no mínimo 5 caracteres'})
    @MaxLength(35, {message: 'O campo nrMotor não pode ultrapassar 35 caracteres'})
    @IsOptional()
    nrMotor?: string;

    @IsString()
    @MinLength(3, {message: 'O campo cilindrada precisa ter no mínimo 3 caracteres'})
    @MaxLength(10, {message: 'O campo cilindrada não pode ultrapassar 35 caracteres'})
    @IsOptional()
    cilindrada?: string;

    @IsString()
    @MinLength(5, {message: 'O campo nrIncriscao precisa ter no mínimo 5 caracteres'})
    @MaxLength(15, {message: 'O campo nrIncriscao não pode ultrapassar 15 caracteres'})
    @IsOptional()
    nrIncriscao?: string;

    @IsDate()
    @MinLength(10, {message: 'O campo dataInscricao precisa ter no mínimo 10 caracteres, formato Ano-mes-dia (2021-04-10)'})
    @MaxLength(10, {message: 'O campo dataInscricao não pode ultrapassar 10 caracteres, formato Ano-mes-dia (2021-04-10)'})
    @IsOptional()
    dataInscricao?: Date;

    @IsDate()
    @MinLength(10, {message: 'O campo validade precisa ter no mínimo 10 caracteres, formato Ano-mes-dia (2021-04-10)'})
    @MaxLength(10, {message: 'O campo validade não pode ultrapassar 10 caracteres, formato Ano-mes-dia (2021-04-10)'})
    @IsOptional()
    validade?: Date;

    @IsString()
    @MinLength(5, {message: 'O campo nome precisa ter no mínimo 5 caracteres'})
    @MaxLength(80, {message: 'O campo nome não pode ultrapassar 80 caracteres'})
    @IsOptional()
    nome?: string;

    @IsString()
    @MinLength(5, {message: 'O campo propulsao precisa ter no mínimo 5 caracteres'})
    @MaxLength(20, {message: 'O campo propulsao não pode ultrapassar 20 caracteres'})
    @IsOptional()
    propulsao?: string;

    @IsString()
    @MinLength(5, {message: 'O campo tipoEmbarcacao precisa ter no mínimo 5 caracteres'})
    @MaxLength(40, {message: 'O campo tipoEmbarcacao não pode ultrapassar 40 caracteres'})
    @IsOptional()
    tipoEmbarcacao?: string;

    @IsString()
    @MinLength(5, {message: 'O campo potencia precisa ter no mínimo 5 caracteres'})
    @MaxLength(10, {message: 'O campo potencia não pode ultrapassar 10 caracteres'})
    @IsOptional()
    potencia?: string;

    @IsString()
    @MinLength(5, {message: 'O campo nrMotor1 precisa ter no mínimo 5 caracteres'})
    @MaxLength(20, {message: 'O campo nrMotor1 não pode ultrapassar 20 caracteres'})
    @IsOptional()
    nrMotor1?: string;

    @IsString()
    @MinLength(5, {message: 'O campo fabricante1 precisa ter no mínimo 5 caracteres'})
    @MaxLength(40, {message: 'O campo fabricante1 não pode ultrapassar 40 caracteres'})
    @IsOptional()
    fabricante1?: string;

    @IsString()
    @MinLength(5, {message: 'O campo nrMotor2 precisa ter no mínimo 5 caracteres'})
    @MaxLength(20, {message: 'O campo nrMotor2 não pode ultrapassar 20 caracteres'})
    @IsOptional()
    nomeMotor2?: string;

    @IsString()
    @MinLength(5, {message: 'O campo fabricante2 precisa ter no mínimo 5 caracteres'})
    @MaxLength(40, {message: 'O campo fabricante2 não pode ultrapassar 40 caracteres'})
    @IsOptional()
    fabricante2?: string;

    @IsString()
    @MinLength(5, {message: 'O campo nrMotor3 precisa ter no mínimo 5 caracteres'})
    @MaxLength(20, {message: 'O campo nrMotor3 não pode ultrapassar 20 caracteres'})
    @IsOptional()
    nrMotor3?: string;

    @IsString()
    @MinLength(5, {message: 'O campo fabricante3 precisa ter no mínimo 5 caracteres'})
    @MaxLength(40, {message: 'O campo fabricante3 não pode ultrapassar 40 caracteres'})
    @IsOptional()
    fabricante3?: string;

    @IsString()
    @MinLength(5, {message: 'O campo areaNavegacao precisa ter no mínimo 5 caracteres'})
    @MaxLength(40, {message: 'O campo areaNavegacao não pode ultrapassar 40 caracteres'})
    @IsOptional()
    areaNavegacao?: string;

    @IsString()
    @MinLength(5, {message: 'O campo atividade precisa ter no mínimo 5 caracteres'})
    @MaxLength(40, {message: 'O campo atividade não pode ultrapassar 40 caracteres'})
    @IsOptional()
    atividade?: string;

    @IsInt()
    @MinLength(0, {message: 'O campo nrTripulante precisa ter no mínimo 1 caracteres'})
    @MaxLength(2, {message: 'O campo nrTripulante não pode ultrapassar 2 caracteres'})
    @IsOptional()
    nrTripulante?: number;

    @IsInt()
    @MinLength(0, {message: 'O campo nrPassageiro precisa ter no mínimo 1 caracteres'})
    @MaxLength(2, {message: 'O campo nrPassageiro não pode ultrapassar 2 caracteres'})
    @IsOptional()
    nrPassageiro?: number;

    @IsString()
    @MinLength(5, {message: 'O campo construtor precisa ter no mínimo 5 caracteres'})
    @MaxLength(50, {message: 'O campo construtor não pode ultrapassar 50 caracteres'})
    @IsOptional()
    construtor?: string;

    @IsInt()
    @MinLength(10, {message: 'O campo anoConstrucao precisa ter no mínimo 10 caracteres, formato Ano-mes-dia (2021-04-10)'})
    @MaxLength(10, {message: 'O campo anoConstrucao não pode ultrapassar 10 caracteres, formato Ano-mes-dia (2021-04-10)'})
    @IsOptional()
    anoConstrucao?: number;

    @IsString()
    @MinLength(2, {message: 'O campo cumprimento precisa ter no mínimo 2 caracteres'})
    @MaxLength(10, {message: 'O campo cumprimento não pode ultrapassar 10 caracteres'})
    @IsOptional()
    cumprimento?: string;

    @IsString()
    @MinLength(5, {message: 'O campo tipoCasco precisa ter no mínimo 5 caracteres'})
    @MaxLength(15, {message: 'O campo tipoCasco não pode ultrapassar 15 caracteres'})
    @IsOptional()
    tipoCasco?: string;

    @IsString()
    @MinLength(5, {message: 'O campo nrSerieCasco precisa ter no mínimo 5 caracteres'})
    @MaxLength(15, {message: 'O campo nrSerieCasco não pode ultrapassar 15 caracteres'})
    @IsOptional()
    nrSerieCasco?: string;

}