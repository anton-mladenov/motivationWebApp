import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { MinLength, IsString } from 'class-validator';
import User from "../users/entity"

@Entity()
export default class Motivation extends BaseEntity {

	@PrimaryGeneratedColumn()
	id?: number

	@IsString()
	@MinLength(5)
	@Column('text', {nullable:false})
	motivation: string

	@ManyToOne(_ => User, user => user.id) 
	user: number;
}
