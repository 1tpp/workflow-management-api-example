import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'simform',
      username: 'postgres',
      entities: [],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
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
