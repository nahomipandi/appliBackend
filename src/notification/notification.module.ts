import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationSubscribers } from './notification.subscribers';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationService,NotificationSubscribers],
  controllers: [NotificationController]
})
export class NotificationModule {}
