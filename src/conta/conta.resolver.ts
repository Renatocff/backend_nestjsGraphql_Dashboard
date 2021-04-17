import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/auth.guard';
import { Conta } from './conta.entity';
import { ContaService } from './conta.service';
import { CreateContaInput } from './dto/create-conta.input';
import { UpdateContaInput } from './dto/update-conta.input';

@Resolver()
export class ContaResolver {
    constructor(
        private contaService: ContaService
    ){}

    @Query(() => [Conta])
    @UseGuards(GqlAuthGuard)
    async findAllContas(
        @Args('userId') userId: number
    ): Promise<Conta[]>{
        const contas = await this.contaService.findAllContas(userId);
        return contas;
    }

    @Query(() => [Conta])
    @UseGuards(GqlAuthGuard)
    async findContaByUserId(
        @Args('id') id: number,
        @Args('userId') userId: number,
    ): Promise<Conta[]>{
        const contas = await this.contaService.findContaByUserId(id, userId);
        return contas;
    }

    @Query(() => Conta)
    @UseGuards(GqlAuthGuard)
    async findContaById(
        @Args('id') id: number,
        @Args('userId') userId: number,
    ): Promise<Conta>{
        const conta = await this.contaService.findContaById(id, userId);
        return conta;
    }

    @Mutation(() => Conta)
    @UseGuards(GqlAuthGuard)
    async createConta(
        @Args('data') data: CreateContaInput
    ): Promise<Conta>{
        const conta = await this.contaService.createConta(data);
        return conta;
    }

    @Mutation(() => Conta)
    @UseGuards(GqlAuthGuard)
    async UpdateConta(
        @Args('id') id: number,
        @Args('data') data: UpdateContaInput
    ): Promise<Conta>{
        const contaUpdated = await this.contaService.updateConta(id,data);
        return contaUpdated;
    }

    @Mutation(() => Boolean)
    @UseGuards(GqlAuthGuard)
    async deleteConta(
        @Args('id') id: number,
        @Args('userId') userId: number
    ): Promise<Boolean>{
        const deleted = await this.contaService.deleteConta(id, userId);
        return deleted;
    }
    
}
