import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { MinLength, IsString } from 'class-validator';

@Entity()
export default class Motivations extends BaseEntity {

	@PrimaryGeneratedColumn()
	id?: number

	@IsString()
	@MinLength(5)
	@Column('text', {nullable:false})
	motivation: string

}