import { JsonController, Get, Param, Put, Body, NotFoundError, HttpCode, Post, Patch, BodyParam, BadRequestError} from 'routing-controllers'
import Motivations from './entity'

@JsonController()
export default class MotivationController {

	@Post("/motivations")
	@HttpCode(201)
	async createMotivation(
	@Body() body: Motivations
	) {
		const entity = Motivations.create()
		entity.motivation = body.motivation
		return await entity.save()
	}

	@Patch("/motivations/:id")
	@HttpCode(200)
	async updateMotivation(
	@Param("id") id: number,
	@BodyParam("motivation") motivation: string
	) {
		let motivationToEdit = await Motivations.findOne(id)

		if (!motivationToEdit) throw new NotFoundError("There's no motivation found with this ID, fam!")
		if (!motivation) throw new BadRequestError("That's a bad request, bro!")

		motivationToEdit.motivation = await motivation

		return motivationToEdit.save()
	}



}