import { Controller,Get, Post ,Body,Param, Patch, Delete, Put} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { Observable, from } from 'rxjs';
import { User } from './interfaces/user entity';
import { DeleteResult, UpdateResult } from 'typeorm';

//localhost:3000/users/3
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService:UsersService){}

    @Post()
    create(@Body() user:User): Observable<User>{
        return this.usersService.createUser(user);
        
        
    }
   
    @Get()
    findAll():Observable<User[]>{
        return this.usersService.findAllusers();
    }

    @Put(':id')
    update(
        @Param('id')id:number,
        @Body() user:User
    ):Observable<UpdateResult> {
        return this.usersService.updateUser(id,user);
        
    }

    @Delete(':id')
    
    delete(@Param('id')id:number):Observable<DeleteResult>{
        return this.usersService.deleteUser(id);

    }
   

   
}
