import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_user')
export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nom:string;
    @Column()
    prenom:string;
    @Column()
    age:number;
    notifications: any;
   
    
}