import { Injectable } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { User } from "src/users/interfaces/user entity";
import { Notification } from "./notification.entity";

@Injectable()
export class NotificationSubscribers{
    constructor(
        private readonly notificationsService:NotificationService,
        private readonly eventEmitter:EventEmitter2,
        ){}

        date=new Date()
        
        @OnEvent('user.save')
        handleUserCreateEvent(payloadUser:User){
            console.log('utilisateur cree:',payloadUser);

        const not:Notification={
            hour:this.date.getHours(),
            minute: this.date.getMinutes(),
            message: payloadUser.prenom + 'created',
            user: payloadUser,
            id: null,
            
        };
          this.notificationsService.createNotification(not);

        }


        @OnEvent('user.updated')
        handleUserUpdateEvent(payloadUser: User) {
        console.log('Utilisateur mis à jour:', payloadUser);

            const not : Notification = {
                hour: this.date.getHours(),
                minute: this.date.getMinutes(),
                message: payloadUser.prenom +'a été mis à jour',
                user: payloadUser,
                id: null,
                
            };

            // Ajoutez ici la logique pour envoyer la notification
            this.notificationsService.createNotification(not);
}


            @OnEvent('user.deleted')
            handleUserDeleteEvent(payloadUser: User) {
            console.log('Utilisateur supprimé:', payloadUser);

            const not: Notification = {
                hour: this.date.getHours(),
                minute: this.date.getMinutes(),
                message: payloadUser.prenom +  'a été supprimé',
                user: payloadUser,
                id: null,
                
            };

            // Ajoutez ici la logique pour envoyer la notification
            this.notificationsService.createNotification(not);
            }



    

}