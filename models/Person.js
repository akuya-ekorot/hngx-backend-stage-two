// Person model:
const supabase = require("../utils/supabase");

class Person {
	constructor(person) {
		this.id = person.id;
		this.name = person.name;
		this.email = person.email;
		this.age = person.age;
		this.country = person.country;
	}

	/**
	 * Add a new person to the database
	 * @param {Person} person
	 */
	static async add(person) {
		const { error } = await supabase.from("person").insert(person);

		if (error) {
			console.log(error);
			return error;
		}

		return { message: "Person is added to the database" };
	}

	/**
	 * Get a person from the database
	 * @param {string} id
	 */
	static async get(id) {
		const { data, error } = await supabase
			.from("person")
			.select("*")
			.eq("id", id)
			.single();

		if (error) {
			console.log(error);
			return error;
		}

		return data;
	}

	/**
	 * Update a person in the database
	 * @param {string} id
	 */
	static async update(id, person) {
		const { error } = await supabase
			.from("person")
			.update(person)
			.eq("id", id);

		if (error) {
			console.log(error);
			return error;
		}

		return { message: "Person is updated in the database" };
	}

	/**
	 * Delete a person from the database
	 * @param {string} id
	 */
	static async delete(id) {
		const { error } = await supabase.from("person").delete().eq("id", id);

		if (error) {
			console.log(error);
			return error;
		}

		return { message: "Person is deleted from the database" };
	}
}

module.exports = Person;
