const router = require("express").Router();
const Person = require("../models/Person");

/**
 * CREATE: Adding a new person to the database
 */
router.post("/", async (req, res) => {
	const person = req.body;

	const response = await Person.add(person);

	res.send(response);
});

/**
 * READ: Getting a person from the database
 */
router.get("/:id", async (req, res) => {
	const id = req.params.id;

	const response = await Person.get(id);

	res.send(response);
});

/**
 * UPDATE: Updating a person in the database
 */
router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const person = req.body;

	const response = await Person.update(id, person);

	res.send(response);
});

/**
 * DELETE: Deleting a person from the database
 */
router.delete("/:id", async (req, res) => {
	const id = req.params.id;

	const response = await Person.delete(id);

	res.send(response);
});

module.exports = router;
