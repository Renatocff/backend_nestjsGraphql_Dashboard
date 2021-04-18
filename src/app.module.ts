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
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error) => {
        const graphQLFormattedError = {
          message: error.extensions?.exception?.response?.message || error.message,
          code: error.extensions?.exception?.status
        };
        return graphQLFormattedError;
      },
    }),
    UserModule,
    ContaModule,
    MovimentacoesModule,
    AtivoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
