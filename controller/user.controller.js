const userService = require("../services/user.service");
const config = require('../config/config');

module.exports = class userController{
static async apiAddAdmin(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password are required",
      });
    }

    const newUser = await userService.addAdmin(req);
    res.status(201).json({
      status: "success",
      data: {
        filedoc: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

static async apiAddUser(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password are required",
      });
    }

    const newUser = await userService.addUser(req);
    res.status(201).json({
      status: "success",
      data: {
        filedoc: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
}