const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

function jwtSignUser(user) {
  const ONE_WEEk = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEk,
  });
}

module.exports = {
  async register(req, res) {
    try {
        console.log(req.body)
      const { firstName, lastName, email, password, phone, address } =
        req.body;

      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      const contact = parseInt(phone);
      const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: pass,
        phone: contact,
        address: address,
      });

      // const userJson = user.toJSON();
      res.send({ Info: "Account Created Successfully" });
    } catch (error) {
      res.status(500).send({
        error: "Account Creation Unsuccessful",
      });
      console.log(error);
    }
  },
  async login(req, res) {
    try {
      console.log(req.body);
      const { email, password } = req.body;

      let user = await User.findOne({
        where: { email: email },
      });
console.log(user)
      if (!user) {
        return res.status(403).send({
          error: "Email Does not Exist",
        });
      }

      const isValidate = await bcrypt.compare(password, user.password);
      if (!isValidate) {
        return res.status(403).send({
          error: "wrong Password",
        });

      }

      const userJson = user.toJSON();
      console.log(userJson);
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (error) {
      res.status(403).send({
        error: "Login error",
      });
      console.log(error)
    }
  },
};
