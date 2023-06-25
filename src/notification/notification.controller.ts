import { Body, Controller, Get, Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';


@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationsService:NotificationService){}

    @Post()
    create(@Body()Notification:Notification):Observable<Notification>{
        return this.notificationsService.createNotification(Notification);
    }


    @Get()

    findAll():Observable<Notification[]>{
        return this.notificationsService.findAll();
    }
}


