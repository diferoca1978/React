//* A litle trick to get again the intellicense
// 1. Import express again
// 2. Indicate to the response that the type is = express.response.

const { response } = require('express');

const User = require('../database/models/userModel');

const loginUser = (req, res = response) => {
  res.json({
    ok: true,
    user: req.body,
  });
};

const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Contact with customer service',
    });
  }
};

const renew = (req, res) => {
  res.json({
    message: 'Hellow from renew a JWT 🙊',
  });
};

module.exports = {
  loginUser,
  registerUser,
  renew,
};
