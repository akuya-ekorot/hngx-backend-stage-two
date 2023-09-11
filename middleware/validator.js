const { body, param, validationResult } = require("express-validator");

const validateAddPerson = [
	body("name")
		.notEmpty()
		.isString()
		.escape()
		.withMessage("Name must be a valid string"),
	body("email").notEmpty().isEmail().withMessage("Email must be a valid email"),
	body("age").notEmpty().isInt().withMessage("Age must be an integer"),
	body("country")
		.notEmpty()
		.isString()
		.escape()
		.withMessage("Country must be a valid string"),

	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
];

const validateGetPerson = [
	param("id").notEmpty().isInt().withMessage("ID must be an integer"),

	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
];

const validateUpdatePerson = [
	param("id").notEmpty().isInt().withMessage("ID must be an integer"),
	body("name")
		.isString()
		.escape()
		.optional()
		.withMessage("Name must be a valid string"),
	body("email").isEmail().optional().withMessage("Email must be a valid email"),
	body("age").isInt().optional().withMessage("Age must be an integer"),

	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
];

const validateDeletePerson = [
	param("id").notEmpty().isInt().withMessage("ID must be an integer"),

	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
];

module.exports = {
	validateAddPerson,
	validateDeletePerson,
	validateGetPerson,
	validateUpdatePerson,
};
