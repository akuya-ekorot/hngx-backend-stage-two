const router = express.Router();

/**
 * CREATE: Adding a new person to the database
 */
router.post("/", (req, res) => {
	const person = req.body;
	console.log(person);
	res.send("Person is added to the database");
});

/**
 * READ: Getting a person from the database
 */
router.get("/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
	res.send("Getting a person from the database");
});

/**
 * UPDATE: Updating a person in the database
 */
router.put("/:id", (req, res) => {
	const id = req.params.id;
	const person = req.body;
	console.log(id, person);
	res.send("Person is updated in the database");
});

/**
 * DELETE: Deleting a person from the database
 */
router.delete("/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
	res.send("Person is deleted from the database");
});

module.exports = router;
