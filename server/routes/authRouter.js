/* 
	Auth routes 
	host + /api/auth 
*/
const express = require("express");
const {
  addUser,
  loginUser,
  renewToken,
} = require("../controllers/authController");
const router = express.Router();
const { registerValidator, loginValidator } = require("../middlewares/validations/authValidator");

// Register
router.post("/new", registerValidator ,addUser);

//login
router.post("/", loginValidator , loginUser);

// Renew
router.get("/renew", renewToken);

module.exports = router;
