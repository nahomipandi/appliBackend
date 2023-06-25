import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './interfaces/user entity';
import EventEmitter from 'events';
import { Observable, from } from 'rxjs';


@Injectable()
export class UsersService {
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
    private readonly eventEmitter: EventEmitter
        createUser(user:User):Observable<User>{
            this.eventEmitter.emit('user.save',User);
            return from( this.usersRepository.save(user));

        }
     

        findAllusers():Observable<User[]>{
            return from(this.usersRepository.find());
        }
        updateUser(id:number,user:User):Observable<UpdateResult>{
            return from(this.usersRepository.update(id,user))
        }

        deleteUser(id:number):Observable<DeleteResult>{

            //methode to create user public
            this.eventEmitter.emit('user.')
            return from (this.usersRepository.delete(id));
        }
      
}
