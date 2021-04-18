import { Field, HideField, ID, ObjectType } from "@nestjs/graphql";
import { Conta } from "../conta/conta.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { nivelUser } from "./dto/nivel-user";
import { hashPasswordTransformer } from "../commons/helpers/crypto";

@ObjectType()
@Entity({name:"User", synchronize: false})
export class User {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column({unique: true})  
    usuario!: string;

    @Column({
        transformer: hashPasswordTransformer
    })
    @HideField()
    senha!: string;

    @Column({
        type: "enum",
        enum: nivelUser,
        default: nivelUser.USUARIO
    })
    nivel!: nivelUser;

    @Column({ default: true })
    ativo?: boolean;

    @OneToMany(() => Conta, conta => conta.user)
    contas?: Conta[];    

    @Column({ default: 0})
    userResponsavel?: number;

    @CreateDateColumn({type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

}