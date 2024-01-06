import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from '@/config/configuration';
import { ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { ProcessesModule } from '@/modules/processes/processes.module';
import { RequestsModule } from '@/modules/requests/requests.module';
import { StatesModule } from '@/modules/states/states.module';
import { ActionsModule } from '@/modules/actions/actions.module';
import { TransitionsModule } from '@/modules/transitions/transitions.module';
import { RequestDataModule } from '@/modules/request-data/request-data.module';
import { RolesModule } from '@/modules/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configuration,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const dbConfig = {
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
        };

        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true, // TODO: change to false in production
          logging: true, // TODO: change to false in production
          ssl: false,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    ProcessesModule,
    TransitionsModule,
    RequestsModule,
    StatesModule,
    ActionsModule,
    RequestDataModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
