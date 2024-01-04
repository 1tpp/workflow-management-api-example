import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';
import { ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './modules/users/users.module';
import { ProcessesModule } from './modules/processes/processes.module';
import { RequestsModule } from './modules/requests/requests.module';
import { StatesModule } from './modules/states/states.module';
import { ActionsModule } from './modules/actions/actions.module';
import { TransitionsModule } from './modules/transitions/transitions.module';
import { RequestDataModule } from './modules/request-data/request-data.module';
import { ProcessUsersModule } from './modules/process-users/process-users.module';
import { RequestStakeHoldersModule } from './modules/request-stake-holders/request-stake-holders.module';

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

        console.log(dbConfig);

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
    UsersModule,
    ProcessesModule,
    RequestsModule,
    StatesModule,
    ActionsModule,
    TransitionsModule,
    RequestDataModule,
    ProcessUsersModule,
    RequestStakeHoldersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
