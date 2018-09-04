import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator';
import User from "../users/entity"
// import { getRepository, getManager } from "typeorm";

@Entity()
export default class Motivation extends BaseEntity {

	@PrimaryGeneratedColumn()
	id?: number

	@IsString()
	// @Length(5, 50)
	@Column('text', { nullable: false })
	motivation: string

	@ManyToOne(_ => User, user => user.id)
	user: number;
}