import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ContaModule } from './conta/conta.module';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { AtivoModule } from './ativo/ativo.module';
//import { FuncionarioModule } from './funcionario/funcionario.module';
//import { PromocaoModule } from './promocao/promocao.module';
//import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    ContaModule,
    MovimentacoesModule,
    AtivoModule,
    AuthModule,
    //FuncionarioModule,
    //PromocaoModule,
    //AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
