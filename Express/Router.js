const express = require("express");
const userRegister = require("./useController")
const Routes = express.Router();

Routes.route("/api/v1/register").post(userRegister);

module.exports = Routes