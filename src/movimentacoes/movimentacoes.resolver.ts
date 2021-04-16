import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
//import { GqlAuthGuard } from '../auth/auth.guard';
import { CreateMovimentInput } from './dto/create-moviment.input';
import { UpdateMovimentInput } from './dto/update-moviment.input';
import { Movimentacoes } from './movimentacoes.entity';
import { MovimentacoesService } from './movimentacoes.service';

@Resolver()
export class MovimentacoesResolver {
    constructor(
        private movimentacoesService: MovimentacoesService
    ){}

    @Query(() => [Movimentacoes])
    //@UseGuards(GqlAuthGuard)
    async findAllMoviments(
        @Args('userId') userId: number
    ): Promise<Movimentacoes[]>{
        const contas = await this.movimentacoesService.findAllMoviments(userId);
        return contas;
    }

    @Query(() => Movimentacoes)
    //@UseGuards(GqlAuthGuard)
    async findMovimentById(
        @Args('id') id: number,
        @Args('userResponsavelId') userResponsavelId: number
    ): Promise<Movimentacoes>{
        const movimento = await this.movimentacoesService.findMovimentById(id, userResponsavelId);
        return movimento;
    }

    @Mutation(() => Movimentacoes)
    //@UseGuards(GqlAuthGuard)
    async createMoviment(
        @Args('data') data: CreateMovimentInput
    ): Promise<Movimentacoes>{
        const movimento = await this.movimentacoesService.createMoviment(data);
        return movimento;
    }

    @Mutation(() => Movimentacoes)
    //@UseGuards(GqlAuthGuard)
    async updateMoviment(
        @Args('data') data: UpdateMovimentInput
    ): Promise<Movimentacoes>{
        const movimento = await this.movimentacoesService.updateMoviment(data);
        return movimento;
    }
}
