import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { CreateMovimentInput } from './dto/create-moviment.input';
import { UpdateMovimentInput } from './dto/update-moviment.input';
import { Movimentacoes } from './movimentacoes.entity';

@Injectable()
export class MovimentacoesService {
    constructor(
        @InjectRepository(Movimentacoes)
        private movimentacoesRepository: Repository<Movimentacoes>,
        private userService: UserService
    ){}

    async findAllMoviments(userId: number): Promise<Movimentacoes[]>{

        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const movimentos = await this.movimentacoesRepository.find({
            relations: ["ativo", "conta", "usuario"],
        });
        return movimentos;
    }

    async findMovimentById(idMovimento: number, userId: number): Promise<Movimentacoes>{

        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const movimento = await this.movimentacoesRepository.findOne({ 
            relations: ["ativo", "conta", "usuario"],
            where: {id: idMovimento} 
        });

        return movimento;
    }

    async createMoviment(data: CreateMovimentInput): Promise<Movimentacoes>{
        
        const user = await this.userService.findUserById(data.userResponsavelId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const movimentoCreated = await this.movimentacoesRepository.save(data);

        const movimento = await this.movimentacoesRepository.findOne({ 
            relations: ["ativo", "conta", "usuario"],
            where: {id: movimentoCreated.id} 
        });

        if(!movimentoCreated){
            throw new InternalServerErrorException(`Não foi possível criar o movimento ${data.descricao}`);
        }

        return movimento;
    }

    async updateMoviment(data: UpdateMovimentInput): Promise<Movimentacoes>{
 
        const user = await this.userService.findUserById(data.userResponsavelId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const movimento = await this.findMovimentById(data.id, data.userResponsavelId);
        
        await this.movimentacoesRepository.update(movimento.id, {...data});

        const movimentoUpdated = this.movimentacoesRepository.create({...movimento, ...data});

        return movimentoUpdated;
    }
}
