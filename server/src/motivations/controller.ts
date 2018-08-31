import { JsonController, Get, Param, Body, NotFoundError, BodyParam, HttpCode, Post, Patch, BadRequestError, Delete } from 'routing-controllers'
import Motivation from './entity';
import { getConnection } from "typeorm";

// let randomizer = (array) => {
// 	return Math.floor(Math.random() * array.length)
// }

@JsonController()
export default class MotivationController {

	// get ALL motivations
	// @Authorized()
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

		// const randomMotivation: Motivation | undefined = await getManager()
		// return await getManager()
		// 	.createQueryBuilder(Motivation, "motivation")
		// 	.orderBy("RANDOM()") 
		// 	// .limit(1)
		// 	.getMany();

		return await getConnection()
			.createQueryBuilder()
			.select("id")
			.from(Motivation, "motivation")
			.orderBy("RANDOM()")
			.limit(1)
			.getOne()

		// console.log("randomMotivation", randomMotivation.motivation)
		// return randomMotivation
		// let motIds = await Motivation.find({
		// 	select: ["id"]
		// })
		// console.log("motIds: ", typeof motIds, motIds)

		// let randomMot = await randomizer(motIds)
		// console.log("randomMot: ", typeof randomMot, randomMot)

		// let randomMotId = motIds[randomMot].id
		// console.log("randomMotId: ", typeof randomMotId, randomMotId)

		// let randomMotQuery: any = await Motivation.find({
		// 	select: ["id"],
		// 	where: {
		// 		id: randomMotId
		// 	}
		// })
		// console.log("randomMotQuery: ", randomMotQuery)

		// return randomMotQuery
	}

	// get a PARTICULAR motivation
	// @Authorized()
	@Get("/motivations/:id")
	async getSingleMotivation(
		@Param("id") id: number
	) {
		let singleMotivation = await Motivation.findOne(id)
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