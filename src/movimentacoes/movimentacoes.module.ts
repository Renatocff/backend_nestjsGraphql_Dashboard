import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentacoesService } from './movimentacoes.service';
import { MovimentacoesResolver } from './movimentacoes.resolver';
import { Movimentacoes } from './movimentacoes.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Movimentacoes,
      User
    ]),
  ],
  providers: [MovimentacoesService, UserService, MovimentacoesResolver],
})
export class MovimentacoesModule {}
