import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { User } from './users/interfaces/user entity';
import { NotificationModule } from './notification/notification.module';
import { typeOrmConfig } from './users/config/type orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 imports: [UsersModule,

  //ConfigModule.forRoot({isGlobal:true}),
  //TypeOrmModule.forRoot({
    //type:'postgres',
   // host:process.env.POSTGRES_HOST,
    //port:parseInt(<string>process.env.POSTGRES_PORT),
    //username:process.env.POSTGRES_USER,
    //password:process.env.POSTGRES_PASSWORD,
    //autoLoadEntities:true,
   //synchronize:true,
  //}),
  NotificationModule,
  TypeOrmModule.forRoot(typeOrmConfig),
  TypeOrmModule.forFeature([User]),
    
 ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
