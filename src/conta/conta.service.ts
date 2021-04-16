import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from './conta.entity';
import { CreateContaInput } from './dto/create-conta.input';
import { UpdateContaInput } from './dto/update-conta.input';
import { UserService } from '../user/user.service';
import { MovimentacoesService } from '../movimentacoes/movimentacoes.service';

@Injectable()
export class ContaService {
    constructor(
        @InjectRepository(Conta)
        private contaRepository: Repository<Conta>,
        private userService: UserService,
        private movimentacoesService: MovimentacoesService
    ){}

    async findAllContas(userId: number): Promise<Conta[]> {

        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const contas = await this.contaRepository.find({relations: ["movimentos"]});
        return contas;
    }

    async findContaById(id: number, userId: number): Promise<Conta> {

        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const contas = await this.contaRepository.findOne({
            relations: ["movimentos"],
            where: { id }
        });
        return contas;
    }

    async findContaByUserId(id: number, userId: number): Promise<Conta[]> {

        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const contas = await this.contaRepository.find({
            where: { userId: id }
        });

        if (!contas) {
            throw new NotFoundException(`Não foi encontrada conta cadastrada para o usuário ${id}`);
        }
        return contas;
    }

    async verificaSeContaExiste(data: CreateContaInput): Promise<Conta> {

        const buscaConta = await this.contaRepository.findOne({ where: { agencia: data.agencia, banco: data.banco } });

        if (!buscaConta) {
            return null;
        }

        return buscaConta;
    }

    async createConta(data: CreateContaInput): Promise<Conta> {

        const user = await this.userService.findUserById(data.userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const contaExiste = await this.verificaSeContaExiste(data);
        
        if (contaExiste) {
            throw new InternalServerErrorException(`Não foi possível criar esta conta por que ela já existe em nossa base.`);
        }       

        const contaCreated = await this.contaRepository.save(data);

        if (!contaCreated) {
            throw new InternalServerErrorException('Não foi possível criar uma conta');
        }

        return contaCreated;
        
    }

    async updateConta(id: number, data: UpdateContaInput): Promise<Conta>{

        const user = await this.userService.findUserById(data.userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const conta = await this.findContaById(id, data.userId);

        await this.contaRepository.update(conta.id, {...data});
        
        const contaUpdated = this.contaRepository.create({...conta, ...data});

        return contaUpdated;
    }

    async deleteConta(id: number, userId: number): Promise<boolean> {

        const user = await this.userService.findUserById(userId);

        if(!user.ativo){
            throw new UnauthorizedException(`Operação não autorizada para o usuário ${user.usuario}`);
        }

        const existemovimento = await this.movimentacoesService.findAllMoviments(userId);

        if(existemovimento.length > 0){
            throw new InternalServerErrorException(`Não foi possível deletar a conta ${id} por que há movimentos vinculados a ela.`);
        }

        const contaDeleted = await this.contaRepository.delete(id);

        if (!contaDeleted) {
            throw new InternalServerErrorException(`Não foi possível deletar a conta ${id}`);
        }

        return true;
    }
}
