import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "../user/user.service";
import { Repository } from "typeorm";
import { Ativo } from "./ativo.entity";
import { CreateAtivoInput } from "./dto/create-ativo.input";
import { UpdateAtivoInput } from "./dto/update-ativo.input";

@Injectable()
export class AtivoService {
    constructor(
        @InjectRepository(Ativo)
        private ativoRepository: Repository<Ativo>,
        private userService: UserService
    ){}

    async findAllAtivos(userId: number): Promise<Ativo[]>{
        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const ativos = await this.ativoRepository.find();
        return ativos;  
    }

    async findAtivoById(id: number, userId: number): Promise<Ativo>{
        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const ativo = await this.ativoRepository.findOne({ 
            relations: ["movimento"],
            where: { id }
        });
        return ativo;
    }

    async createAtivo(data: CreateAtivoInput): Promise<Ativo>{
        const user = await this.userService.findUserById(data.idUsuario);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const ativo = await this.ativoRepository.save(data);

        return ativo;
    }

    async updateAtivo(id: number, data: UpdateAtivoInput): Promise<Ativo>{
        const user = await this.userService.findUserById(data.idUsuario);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const update = await this.ativoRepository.update(id, {...data});

        const updated = await this.ativoRepository.create({...data, ...update});
        
        return updated;
    }

}