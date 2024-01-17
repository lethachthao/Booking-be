const userModel = require("../models/user.model");
// const jwt = require("jsonwebtoken")
const jwt = require("../token/token");
const bcrypt = require("bcrypt");
const sendMail = require("./mailler.controller");

// const token = {
//   accessToken:{
//           token: jwt.sign({ userId: user._id, role: 'user' }, 'jwt', { expiresIn: '1d' })
//           }

// }

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "email khong ton tai" });
  }
  if (user.password !== password) {
    return res.status(401).json({ error: "Sai mat khau" });
  }
  const data = {
    accessToken: jwt.accessToken(user._id, "user"),
    refreshToken: jwt.refreshToken(user._id, "user"),
  };

  res.status(200).json(data);
};

const registerContrller = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;

  const passwordSalt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, passwordSalt);

  await userModel.create({
    email,
    name,
    phoneNumber,
    password: passwordHash,
  });

  const configMail = {
    title: "Dang ki thanh cong!",
    to: {
      name,
      email,
    },
  };

  await sendMail(configMail, (isSuccess, data) => {
    if (isSuccess) {
      console.log("Gửi email thành công!");
    } else {
      console.log("Gửi email không thành công! Lỗi: ", data);
    }
  });

  res.status(200).json({ message: "Tao nguoi dung thanh cong:" });
};

module.exports = {
  loginController,
  registerContrller,
};
