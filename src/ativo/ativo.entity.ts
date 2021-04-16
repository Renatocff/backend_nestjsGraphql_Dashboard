import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Movimentacoes } from "../movimentacoes/movimentacoes.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Estados } from "../utils/Estados";
import { Paises } from "../utils/Paises";
import { tipoAtivo } from "./dto/tipo-ativo";
import { tipoCombustivel } from "./dto/tipo-combustivel";
import { tipoCompra } from "./dto/tipo-compra";

@ObjectType()
@Entity("Ativo")
export class Ativo {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column({
        type: "enum",
        enum: tipoAtivo
    })
    tipoAtivo!: tipoAtivo;

    @Column({
        type: "enum",
        enum: tipoCompra
    })
    tipocompra!: tipoCompra;

    @Column()
    descricao!: string;
        
    @Column({default: false})
    vendido?: boolean;

    @Column()
    nomeProprietario!: string;

    @Column()
    donoReal!: string;

    @Column({
        type: "enum",
        enum: Paises
    })
    pais!: Paises

    @Column({
        type: "enum",
        enum: Estados,
    })
    uf!: Estados;

    @Column()
    cidade!: string;

    @Column()
    codPostal!: string;

    @Column()
    endereco!: string;

    @Column()
    nr!: string;

    @Column({ nullable: true })
    complemento?: string;

    @Column()
    bairro!: string;

    @Column()
    idUsuario!: number;

    @Column({ name: 'idMovimento', nullable: true })
    idMovimento?: number;

    @Column({nullable: true})
    nrimovel?: string;

    @Column({nullable: true})
    renavam?: number;

    @Column({nullable: true})
    placa?: string;

    @Column({nullable: true})
    anoModelo?: number;

    @Column({nullable: true})
    anoFab?: number;

    @Column({nullable: true})
    exercicio?: number;

    @Column({nullable: true})
    marca?: string;

    @Column({nullable: true})
    modelo?: string;

    @Column({nullable: true})
    versao?: string;

    @Column({nullable: true})
    chassi?: string;

    @Column({nullable: true})
    cor?: string;

    @Column({
        type: 'enum',
        enum: tipoCombustivel,
        nullable: true
    })
    combustivel?: tipoCombustivel;

    @Column({nullable: true})
    nrMotor?: string;

    @Column({nullable: true})
    cilindrada?: string;

    @Column({nullable: true})
    nrIncriscao?: string;

    @Column({nullable: true})
    dataInscricao?: Date;

    @Column({nullable: true})
    validade?: Date;

    @Column({nullable: true})
    nome?: string;

    @Column({nullable: true})
    propulsao?: string;

    @Column({nullable: true})
    tipoEmbarcacao?: string;

    @Column({nullable: true})
    potencia?: string;

    @Column({nullable: true})
    nrMotor1?: string;

    @Column({nullable: true})
    fabricante1?: string;

    @Column({nullable: true})
    nomeMotor2?: string;

    @Column({nullable: true})
    fabricante2?: string;

    @Column({nullable: true})
    nrMotor3?: string;

    @Column({nullable: true})
    fabricante3?: string;

    @Column({nullable: true})
    areaNavegacao?: string;

    @Column({nullable: true})
    atividade?: string;

    @Column({nullable: true})
    nrTripulante?: number;

    @Column({nullable: true})
    nrPassageiro?: number;

    @Column({nullable: true})
    construtor?: string;

    @Column({nullable: true})
    anoConstrucao?: number;

    @Column({nullable: true})
    cumprimento?: string;

    @Column({nullable: true})
    tipoCasco?: string;

    @Column({nullable: true})
    nrSerieCasco?: string;

    @CreateDateColumn({type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

    @OneToOne(() => Movimentacoes, movimento => movimento.ativo) // specify inverse side as a second parameter
    @JoinColumn([
        { name: "idMovimento", referencedColumnName: "id" }
    ])
    movimento?: Movimentacoes;
}