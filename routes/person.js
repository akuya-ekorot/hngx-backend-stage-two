const router = require("express").Router();
const Person = require("../services/Person");
const {
	validateAddPerson,
	validateGetPerson,
	validateUpdatePerson,
	validateDeletePerson,
} = require("../middleware/validator");

router.post("/", validateAddPerson, Person.add);

router.get("/:id", validateGetPerson, Person.get);

router.put("/:id", validateUpdatePerson, Person.update);

router.delete("/:id", validateDeletePerson, Person.delete);

module.exports = router;
