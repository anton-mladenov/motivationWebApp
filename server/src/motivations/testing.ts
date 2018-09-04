import Motivation from './entity';
// import { getRepository } from "typeorm";

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
	// 
}

randomFunc()