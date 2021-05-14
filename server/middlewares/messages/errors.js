const { validationResult } = require("express-validator");

const fieldValidation = (req, res, next) => {
  const errorsValidator = validationResult(req);
  if (!errorsValidator.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errorsValidator.mapped(),
    });
  }
  next();
};

module.exports = fieldValidation;
