const { body, validatinResult } = require("express-validator");

const validateAddPerson = [
	body("name").notEmpty().isString().withMessage("Name must be a string"),
	body("email").notEmpty().isEmail().withMessage("Email must be a valid email"),
	body("country").notEmpty().isString().withMessage("Country must be a string"),

	(req, res, next) => {
		const errors = validatinResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
];
