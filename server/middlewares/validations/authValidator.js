const {check} = require('express-validator');
const fieldValidation = require('../messages/errors');

// Register
const registerValidator= [
	check('name', 'El nombre es obligatorio').not().isEmpty(),
	check('email', 'El email no es válido').isEmail(),
	check('password', 'El password debe contener mas de 8 caracteres').isLength({ min: 8}),
	check('password', 'El password debe contener menos de 15 caracteres').isLength({ max: 15}),
	check('password', 'El password no cumple la reglas establecidas')
	.matches(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/),
	fieldValidation,
];

// login
const loginValidator = [
	check('email', 'El email es obligatorio').not().isEmpty(),
	check('password', 'El password es obligatorio').not().isEmpty(),
	fieldValidation,
];

module.exports = {
	registerValidator,
	loginValidator,
}