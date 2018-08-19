import { JsonController, Get, Param, Body, NotFoundError, HttpCode, Post, Patch, BodyParam, BadRequestError, Delete } from 'routing-controllers'
import Motivations from './entity'
// import {getRepository} from 'typeorm'

// let randomizer = (array) => {
// 	return array.splice(Math.floor(Math.random() * array.length), 1)[0]
// }  

@JsonController()
export default class MotivationController {

	// get ALL motivations
	// @Authorized()
	@Get("/motivations")
	async getAllMotivations() {
		let allMotivations = await Motivations.find()
		return { allMotivations }
	}

	// // get a RANDOM motivation
	// // @Authorized()
	// @Get("/motivations/random")
	// async getRandomMotivation() {
	// 	// da ne zabravq izteglq random mot's za konkretniq sign-at user, a ne ot vsichki user-i, kakto e sega
	// 	// sushto taka da sloja http kodove na vsichki request-i
		
	// 	let numbero = 0

	// 	let motIds = await Motivations.find({ select: ["id"]})
	// 	console.log("motIds: ", motIds)
	// 	let randomId = await randomizer(motIds)
	// 	console.log("randomId: ", typeof randomId.id, randomId.id)
	// 	numbero = randomId.id

	// 	console.log("numbero: ",typeof numbero[0], numbero)
	// 	console.log(await Motivations.findOne(numbero))
	// 	console.log( Object.keys(Motivations.find( { where: { id: 2 }})))
	// 	return await Motivations.findOne(numbero)	
	// }

	// get a PARTICULAR motivation
	// @Authorized()
	@Get("/motivations/:id")
	async getSingleMotivation(
		@Param("id") id: number
	) {
		let singleMotivation = await Motivations.findOne(id)
		return singleMotivation
	}
	
	// @Authorized()
	@Post("/motivations")
	@HttpCode(201)
	async createMotivation(
	@Body() body: Motivations
	) {
		const entity = Motivations.create()
		entity.motivation = body.motivation
		await entity.save()
		return entity
	}

	// @Authorized()
	@Patch("/motivations/:id")
	@HttpCode(200)
	async updateMotivation(
	@Param("id") id: number,
	@BodyParam("motivation") motivation: string
	) {
		let motivationToEdit = await Motivations.findOne(id)

		if (!motivationToEdit) throw new NotFoundError("There's no motivation found with this ID, fam!")
		if (!motivation) throw new BadRequestError("That's a very bad request, bro!")

		motivationToEdit.motivation = await motivation

		return motivationToEdit.save()
	}
	
	// @Authorized()
	@Delete("/motivations/:id")
	async deleteSingleMotivation(
		@Param("id") id: number
	) {
		let singleMotivation = await Motivations.findOne(id)
		if (singleMotivation) return await Motivations.remove(singleMotivation)
		if (!singleMotivation) return "No Motivation found with this ID"
	}

}