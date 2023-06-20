import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
     users: User[]=[
        {
            id:1,
            nom:'Marynard',
            prenom:'john',
            age:20
        },


        {
            id:2,
            nom:'nahomi',
            prenom:'john',
            age:20
        },

        {
            id:3,
            nom:'jacque',
            prenom:'jule',
            age:20
        },

        {
            id:4,
            nom:'Marynard',
            prenom:'john',
            age:20
        },

    ];


    findOne(id:string){
        return this.users.find(user=>user.id== Number(id));
        
    }
    findAll():User[]{
        return this.users;

    }
    create(user:CreateUserDto){
        this.users=[...this.users,user ];
    }

    update(id:string,user:User){
        //retrieve the code to update
        const userToUpdate = this.users.find(u => u.id === +id);
        if(!userToUpdate){
        return new NotFoundException('users existe pas');
        }
        //apply to granulary update a single property
        if(user.nom){
            userToUpdate.nom=user.nom;

        }


        if(user.prenom){
            userToUpdate.prenom=user.prenom;

        }

        if(user.nom){
            userToUpdate.nom=user.nom;

        }
        if(user.nom){
            userToUpdate.nom=user.nom;

        }
         
        if(user.age){
            userToUpdate.age=user.age;

        }

        const updatedUsers =this.users.map(t=> t.id !==+id ? t:userToUpdate);
        this.users=[...updatedUsers];
        return{updatedUser:1, user:userToUpdate};


    }

    //filter declare un tableau

    delete(id:string){
        const nbOfUsersBeforeDelete = this.users.length;
        this.users=[...this.users.filter(t=>t.id !== + id)];
        if(this.users.length < nbOfUsersBeforeDelete){
            return{deletedUsers:1, nbUsers:this.users.length};
        } else{
            return{deletedUsers:0,nbUsers:this.users.length};


        }
    }
   
}
