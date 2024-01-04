import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProcessesModule } from './processes/processes.module';
import { RequestsModule } from './requests/requests.module';
import { StatesModule } from './states/states.module';
import { ActionsModule } from './actions/actions.module';
import { TransitionsModule } from './transitions/transitions.module';
import { RequestDataModule } from './request-data/request-data.module';
import { ProcessUsersModule } from './process-users/process-users.module';
import { RequestStakeHoldersModule } from './request-stake-holders/request-stake-holders.module';

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
