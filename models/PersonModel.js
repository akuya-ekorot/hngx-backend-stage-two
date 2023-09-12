const supabase = require("../utils/supabase");

class PersonModel {
	/**
	 * Add a new person to the database
	 */
	static async add(person) {
		const { data, error } = await supabase
			.from("person")
			.insert(person)
			.select()
			.single();

		if (error) {
			return {
				code: "500",
				message: "Person could not be added to the database",
				error,
			};
		}

		return { code: 201, message: "Person is added to the database", data };
	}

	/**
	 * Get a person from the database
	 */
	static async get(id) {
		const { data, error } = await supabase
			.from("person")
			.select("*")
			.eq("id", id)
			.single();

		if (error) {
			return {
				code: "500",
				message: "Person could not be retrieved from the database",
				data: null,
				error,
			};
		}

		return {
			code: 200,
			message: "Person is retrieved from the database",
			data,
			error: null,
		};
	}

	/**
	 * Update a person in the database
	 */
	static async update(id, person) {
		const { data, error } = await supabase
			.from("person")
			.update(person)
			.eq("id", id)
			.select()
			.single();

		if (error) {
			return { error };
		}

		return { code: 200, message: "Person is updated in the database", data };
	}

	/**
	 * Delete a person from the database
	 */
	static async delete(id) {
		const { error } = await supabase.from("person").delete().eq("id", id);

		if (error) {
			return { error };
		}

		return { code: 200, message: "Person is deleted from the database" };
	}
}

module.exports = PersonModel;
