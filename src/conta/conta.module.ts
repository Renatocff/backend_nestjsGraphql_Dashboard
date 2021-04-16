import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaResolver } from './conta.resolver';
import { Conta } from './conta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Movimentacoes } from '../movimentacoes/movimentacoes.entity';
import { MovimentacoesService } from '../movimentacoes/movimentacoes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conta, User, Movimentacoes]),
  ],
  providers: [ContaService, UserService, MovimentacoesService,ContaResolver],
})
export class ContaModule {}
