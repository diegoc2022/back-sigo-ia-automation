import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'usuario'})
export class Usuario {
   @PrimaryGeneratedColumn('increment')
   id:number;

   @Column({type:'varchar',length:10, nullable: true })
   nombre:string;

   @Column({type:'varchar',length:10, nullable: true,unique:true })
   clave:string; 

   @Column({type:'varchar', nullable: true })   
   fecha_creacion:Date;  
}


