import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/auth.guard';
import { Ativo } from './ativo.entity';
import { AtivoService } from './ativo.service';
import { CreateAtivoInput } from './dto/create-ativo.input';
import { UpdateAtivoInput } from './dto/update-ativo.input';

@Resolver()
export class AtivoResolver {
    constructor(
        private ativoService: AtivoService
    ){}

    @Query(() => [Ativo])
    @UseGuards(GqlAuthGuard)
    async findAllAtivos(
        @Args('userId') userId: number
    ): Promise<Ativo[]>{
        const ativos = await this.ativoService.findAllAtivos(userId);
        return ativos;
    }

    @Query(() => Ativo)
    @UseGuards(GqlAuthGuard)
    async findAtivoById(
        @Args('id') id: number,
        @Args('userId') userId: number
    ): Promise<Ativo>{
        const ativo = await this.ativoService.findAtivoById(id, userId);
        return ativo;
    }

    @Mutation(() => Ativo)
    @UseGuards(GqlAuthGuard)
    async createAtivo(
        @Args('data') data: CreateAtivoInput
    ): Promise<Ativo>{
        const ativo = await this.ativoService.createAtivo(data);
        return ativo;
    }

    @Mutation(() => Ativo)
    @UseGuards(GqlAuthGuard)
    async updateAtivo(
        @Args('id') id: number,
        @Args('data') data: UpdateAtivoInput
    ): Promise<Ativo>{
        
        const ativo = await this.ativoService.updateAtivo(id, data);

        return ativo;
    }

}
