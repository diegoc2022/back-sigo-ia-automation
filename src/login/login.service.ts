import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entity/user';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-dto';
import { UnsubscriptionError } from 'rxjs';
import { error } from 'console';


@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(Usuario)
        private userRepository: Repository<Usuario>,
         
    ){}
   
   getUserAll(): Promise<Usuario[]>{
        return this.userRepository.find();
    }

   async loginData(loginDto:LoginDto): Promise<Usuario>{  
        const { nombre, clave } = loginDto;  
        const user = await this.userRepository.findOneBy({ nombre,clave });
        try {
            return user
        } catch (error) {           
            return error            
        }
            
    }       
        
}

   

