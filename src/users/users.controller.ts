import { Controller,Get, Post ,Body,Param, Patch, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interfaces';
import { CreateUserDto } from './dto/create-users.dto';

//localhost:3000/users/3
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}


    @Get(':id')

    findOne(@Param('id')id:string){
        
       return this.usersService.findOne(id);

         //tslint:disable-next-line: no-console
       // console.log('id',id);
    }

    @Get()
    findAll():User[]{
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body()newUser:CreateUserDto){
    
        //console.log('newUser',newUser);
    this.usersService.create(newUser);

    }

    @Patch(':id')
    updateUser(@Param('id')id:string, @Body()user:CreateUserDto){

        return this.usersService.update(id,user);
        
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.usersService.delete(id);
        
    }
}
