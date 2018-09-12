import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsEmail, MinLength, IsString } from 'class-validator';
import { Exclude } from 'class-transformer'
import * as bcrypt from 'bcrypt'
import Motivations from "../motivations/entity"

@Entity()
export default class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id?: number

	// @Length(2)
	// @Column('text', {nullable:false})
	// username: string

	@IsEmail()
	@Column('text', { nullable: false })
	email: string

	@IsString()
	@MinLength(8)
	@Column('text', { nullable: true })
	@Exclude({ toPlainOnly: true })
	password: string

	@OneToMany(_ => Motivations, motivation => motivation.user)
	// { eager: true }
	motivations: Motivations[];

	async setPassword(rawPassword: string) {
		const hash = await bcrypt.hash(rawPassword, 10)
		this.password = hash
	}

	checkPassword(rawPassword: string): Promise<boolean> {
		return bcrypt.compare(rawPassword, this.password)
	}

}

// @OneToMany(type => Photo, photo => photo.user)
// photos: Photo[];