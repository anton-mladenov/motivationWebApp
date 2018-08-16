import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length, IsString } from 'class-validator';
import User from "../users/entity"

@Entity()
export default class Motivation extends BaseEntity {

	@PrimaryGeneratedColumn()
	id?: number

	@IsString()
	// @Length(5, 50)
	@Column('text', {nullable:false})
	motivation: string

	@ManyToOne(_ => User, user => user.id) 
	user: number;
}
