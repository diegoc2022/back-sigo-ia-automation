import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Usuario } from './login/entity/user';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.POSTGRES_HOST,
      port:parseInt(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      entities: [Usuario],
      synchronize: true,    
  }),  
    LoginModule    
  ],
  controllers:[
    AppController   
  ],
  providers: [
    AppService
  ],
})
export class AppModule { 
  constructor(private dataSouce:DataSource){}
}
