const UserModel = require("../models/UserModel");

// Saving a new user
const addUser = async (req, res) => {
  const userModel = new UserModel(req.body);

  try {
    await userModel.save();
    res.status(201).json({
      ok: true,
      msg: "Registro exitoso",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Hubo un error. Por favor hablar con el administrador",
    });
  }
};

//login an user
const loginUser = (req, res) => {
  // if ok
  const { email, password } = req.body;
  res.json({
    ok: true,
    data: {
      email,
      password,
    },
  });
};

// revalidating
const renewToken = (req, res) => {
  res.json({
    ok: true,
    msg: "Renew works",
  });
};

module.exports = {
  addUser,
  loginUser,
  renewToken,
};
