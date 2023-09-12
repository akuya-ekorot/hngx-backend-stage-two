const { matchedData } = require("express-validator");
const PersonModel = require("../models/PersonModel");

class Person {
	static async add(req, res) {
		const person = matchedData(req);

		const response = await PersonModel.add(person);

		if (response.error) {
			return res.status(500).json(response);
		}

		res.status(response.code).json(response);
	}

	static async get(req, res) {
		const id = req.params.id;

		const response = await PersonModel.get(id);

		if (response.error) {
			return res.status(500).json(response);
		}

		res.status(response.code).json(response);
	}

	static async update(req, res) {
		const id = req.params.id;
		const person = matchedData(req);

		const response = await PersonModel.update(id, person);

		if (response.error) {
			return res.status(500).json(response);
		}

		res.status(response.code).json(response);
	}

	static async delete(req, res) {
		const id = req.params.id;

		const response = await PersonModel.delete(id);

		if (response.error) {
			return res.status(500).json(response);
		}

		res.status(response.code).json(response);
	}
}

module.exports = Person;
