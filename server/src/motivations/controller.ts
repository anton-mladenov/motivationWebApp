import { CurrentUser, OnUndefined, JsonController, Get, Param, Body, NotFoundError, Authorized, BodyParam, HttpCode, Post, Patch, BadRequestError, Delete, Header } from 'routing-controllers'
import Motivation from './entity';
import User from "../users/entity"
// import { getRepository, getManager, getConnection, createQueryBuilder } from "typeorm";

@JsonController()
export default class MotivationController {

	// get ALL motivations
	// @Authorized()
	@Get("/motivations")
	async getAllMotivations(
		@CurrentUser() user: User
	) {
		let allMotivations = await Motivation.find({ where: { user: user.id } })

		return { allMotivations }
	}

	// get a PARTICULAR motivation
	// @Authorized()
	@Get("/motivations/:id([0-9]+)")
	async getSingleMotivation(
		@Param("id") id: number
	) {
		let singleMotivation = await Motivation.findOne(id)
		return singleMotivation
	}

	// get a RANDOM motivation
	// @Authorized()
	@Get("/motivations/random")
	getRandomMotivation(
		@CurrentUser() user: User
	) {
		// da new zabravq izteglq random mot's za konkretniq sign-at user, a ne ot vsichki user-i, kakto e sega
		// sushto taka da sloja http kodove na vsichki request-i
		const randomFunc = async () => {
			try {
				let entityManager = await Motivation.getRepository()
					.createQueryBuilder()
					.select("motivations")
					.from(Motivation, "motivations")
					.where("motivations.user = :user", { user: user.id })
					.orderBy("RANDOM()")
					.limit(1)
					.getOne()

				return entityManager
			}
			catch (error) {
				console.log("___errorrrrr: ", error)
			}
		}
		return randomFunc()
	}

	// create a new motivation
	@Authorized()
	@Post("/motivations")
	@HttpCode(201)
	async createMotivation(
		@Body() body: Motivation,
		@CurrentUser() user: User
	) {
		const entity = Motivation.create()
		entity.motivation = body.motivation
		entity.user = user.id
		await entity.save()
		return entity
	}

	// update a particular motivation
	@Authorized()
	@Patch("/motivations/:id([0-9]+)")
	@HttpCode(200)
	async updateMotivation(
		@Param("id") id,
		@Body() motivationBody
	) {
		let motivationToEdit = await Motivation.findOne(id)

		if (!motivationToEdit) throw new NotFoundError("There's no motivation found with this ID, fam!")
		if (!motivationBody) throw new BadRequestError("That's a very bad request, bro!")

		motivationToEdit.motivation = await motivationBody.motivation

		return motivationToEdit.save()
	}

	// delete a particular motivation
	// @Authorized()
	@Delete("/motivations/:id([0-9]+)")
	@OnUndefined(404)
	async deleteSingleMotivation(
		@Param("id") id: number,
	) {
		let singleMotivation = await Motivation.findOne(id)
		console.log(" __________________ DELETE _____ : ", singleMotivation)

		if (!singleMotivation || singleMotivation === undefined) return "No Motivation found with this ID"

		if (singleMotivation) return await Motivation.remove(singleMotivation)
	}

}