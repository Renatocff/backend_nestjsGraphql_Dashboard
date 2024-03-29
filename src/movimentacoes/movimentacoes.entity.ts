import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Conta } from "../conta/conta.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { tipoMovimento } from "./dto/tipo-movimento";
import { Ativo } from "../ativo/ativo.entity";
import { User } from '../user/user.entity';

@ObjectType()
@Entity({name:"Movimentacoes", synchronize: false})
export class Movimentacoes{
    
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column({
        type: 'enum',
        enum: tipoMovimento,
    })
    tipomovimento!: tipoMovimento

    @Column()
    descricao!: string;

    @Column()
    valor!: number;

    @Column({ name: 'ativoId', default: 0})
    ativoId?: number;

    @OneToOne(() => Ativo, ativo => ativo.movimento) // specify inverse side as a second parameter
    @JoinColumn([
        { name: "ativoId", referencedColumnName: "id" }
    ])
    ativo?: Ativo;

    @Column({ default: 0})
    compraId?: number;

    @Column({ name: 'contaId'})
    contaId!: number;
    
    @ManyToOne(() => Conta, conta => conta.movimentos)
    @JoinColumn([
        { name: "contaId", referencedColumnName: "id" }
    ])
    conta?: Conta;

    @Column({ name: 'userResponsavelId', default: 0})
    userResponsavelId!: number;

    @OneToOne(() => User, user => user.id) // specify inverse side as a second parameter
    @JoinColumn([
        { name: "userResponsavelId", referencedColumnName: "id" }
    ])
    usuario?: User;

    @Column({ default: false })
    estorno?: boolean;

    @CreateDateColumn({type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

}