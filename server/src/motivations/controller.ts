import { JsonController, Get, Param, Body, NotFoundError, Authorized, BodyParam, HttpCode, Post, Patch, BadRequestError, Delete } from 'routing-controllers'
import Motivation from './entity';
// import { getRepository, getManager } from "typeorm";

// let randomizer = (array) => {
// 	return Math.floor(Math.random() * array.length)
// }

@JsonController()
export default class MotivationController {

	// get ALL motivations
	@Authorized()
	@Get("/motivations")
	async getAllMotivations() {
		let allMotivations = await Motivation.find()
		return { allMotivations }
	}

	// get a RANDOM motivation
	// @Authorized()
	@Get("/motivations/random")
	async getRandomMotivation() {
		// da ne zabravq izteglq random mot's za konkretniq sign-at user, a ne ot vsichki user-i, kakto e sega
		// sushto taka da sloja http kodove na vsichki request-i

		const randomFunc = async () => {

			try {
				let entityManager = await Motivation.getRepository()
					.createQueryBuilder()
					.select("motivations.id")
					.from(Motivation, "motivations")
					.orderBy("RANDOM()")
					.limit(1)
					.getOne()

				console.log("__testing: ", entityManager)
				return await entityManager
			}
			catch (error) {
				console.log("___errorrrrr: ", error)
			}

		}

		return await randomFunc()
	}

	// get a PARTICULAR motivation
	@Authorized()
	@Get("/motivations/:id")
	async getSingleMotivation(
		@Param("id") id: number
	) {
		let singleMotivation = await Motivation.findOne(id)
		console.log("____________  testing the back-end with particular motivation ________: ", singleMotivation)
		return singleMotivation
	}

	// @Authorized()
	@Post("/motivations")
	@HttpCode(201)
	async createMotivation(
		@Body() body: Motivation
	) {
		const entity = Motivation.create()
		entity.motivation = body.motivation
		await entity.save()
		return entity
	}

	// @Authorized()
	@Patch("/motivations/:id")
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

	// @Authorized()
	@Delete("/motivations/")
	async deleteSingleMotivation(
		@BodyParam("id") id: number
	) {
		let singleMotivation = await Motivation.findOne(id)

		if (!singleMotivation) return "No Motivation found with this ID"

		if (singleMotivation) return await Motivation.remove(singleMotivation)
	}

}