import { Field, ID, ObjectType } from "@nestjs/graphql";
import { User } from "../user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { tipoConta } from "./dto/tipo-conta";
import { Movimentacoes } from "../movimentacoes/movimentacoes.entity";

@ObjectType()
@Entity({name:"Conta", synchronize: false})
export class Conta{

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    agencia!: string;

    @Column()
    nrconta!: string;

    @Column({
        type: 'enum',
        enum: tipoConta
    })
    tipoconta!: tipoConta;

    @Column()
    banco!: string;

    @Column({ default: true })
    ativo!: boolean;

    @Column({ name: 'userId'})
    userId!: number;

    @Column({ default: 0 })
    userResponsavel!: number;

    @ManyToOne(() => User, user => user.contas)
    @JoinColumn([
        { name: "userId", referencedColumnName: "id" }
    ])
    user?: User;
    
    @OneToMany(() => Movimentacoes, movimento => movimento.conta)
    movimentos?: Movimentacoes[];

    @CreateDateColumn({type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

}