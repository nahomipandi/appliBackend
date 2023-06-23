import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './interfaces/user entity';
import { Observable, from } from 'rxjs';


@Injectable()
export class UsersService {
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>

        createUser(user:User):Observable<User>{
            return from( this.usersRepository.save(user));

        }
     

        findAllusers():Observable<User[]>{
            return from(this.usersRepository.find());
        }
        updateUser(id:number,user:User):Observable<UpdateResult>{
            return from(this.usersRepository.update(id,user))
        }

        deleteUser(id:number):Observable<DeleteResult>{
            return from (this.usersRepository.delete(id));
        }
      
}
