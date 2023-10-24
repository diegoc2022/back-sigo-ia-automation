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
      type: 'postgres',
      host:'dbcmtest.loc',
      port:5432,
      username:'dacastanos',
      password:'QFcc?;[F0S8M',
      database:'cm',
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
