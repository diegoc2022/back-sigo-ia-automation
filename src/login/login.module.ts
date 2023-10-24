import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entity/user';



@Module({
    imports:[
       TypeOrmModule.forFeature([Usuario]) 
    ],
    controllers:[LoginController],
    providers:[LoginService]
})
export class LoginModule {
    
}
