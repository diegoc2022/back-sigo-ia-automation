import { Controller, Delete, Get, Post, Put, Body, Param, HttpStatus } from '@nestjs/common';
import { LoginDto } from './dto/login-dto';
import { LoginService } from './login.service';
import { Usuario } from './entity/user';

@Controller('login')
export class LoginController {

    constructor(private loginService:LoginService){}


    @Get()
    async getUserAll():Promise<LoginDto[]>{
       return await this.loginService.getUserAll();        
    }

    @Post('user')
    loginData(@Body() loginDto: LoginDto): Promise<Usuario>{           
      return this.loginService.loginData(loginDto);
    }

   
}
