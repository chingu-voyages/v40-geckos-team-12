const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      if (isMatch) {
        console.log("match");
        const payload = {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ status: "success", token });
          }
        );
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  },
  register: async (req, res) => {
    const { name, surname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({
        name,
        surname,
        email,
        password: hashedPassword,
      });
      res.status(200).send({ status: "success", msg: "User created" });
    } catch (err) {
      res.json({ message: err });
    }
  },
};
