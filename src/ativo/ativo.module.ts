import { Module } from '@nestjs/common';
import { AtivoService } from './ativo.service';
import { AtivoResolver } from './ativo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ativo } from './ativo.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ativo,
      User
    ]),
  ],
  providers: [AtivoService, UserService, AtivoResolver]
})
export class AtivoModule {}
