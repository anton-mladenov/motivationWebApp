import { JsonController, Get, Param, Body, NotFoundError, HttpCode, Post, Patch, BodyParam, BadRequestError, Delete } from 'routing-controllers'
import Motivations from './entity'

@JsonController()
export default class MotivationController {

	// @Authorized()
	@Get("/motivations")
	async getAllMotivations() {
		let allMotivations = await Motivations.find()
		return { allMotivations }
	}

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
		return await entity.save()
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