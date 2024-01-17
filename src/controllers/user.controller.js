const mongoose = require("mongoose");
const userModel = require("../models/user.model");
const { ObjectId } = mongoose.Types;

//Tạo user mới
const createNewUser = async (req, res, next) => {
  const register = await userModel.create(req.body);
  console.log("data:", req.body);
  res.status(200).json({ register });
};

//Lấy tất cả user
const getAllUser = async (req, res, next) => {
  const allUser = await userModel.find({});

  console.log(allUser);
  res.status(200).json({ data: allUser });
};

//Lay user theo Type
const getUserByType = async (req, res, next) => {
  const { accountType } = req.params;

  const result = await userModel.find({ accountType });
  res.status(200).json({ data: result });
};

//Xoa user
const deleteUser = async (req, res, next) => {
  const { email } = req.query;

  const result = await userModel.findOneAndDelete({ email });

  console.log(result);

  res.status(200).json({ message: "Xoa tai khoan thanh cong", data: result });
};

// const updateUser = async (req, res, next) => {
//   const { _id, ...otherInfo } = req.body;

//   // console.log("otherInfo", otherInfo);
//   const result = await userModel.findByIdAndUpdate(
//     { _id: new ObjectId(_id) },
//     {
//       otherInfo,
//     },
//     {
//       new: true,
//     }
//   );
//   console.log(result);

//   res
//     .status(200)
//     .json({ message: "Cap nhat tai khoan thanh cong", data: result });
// };

const updateUser = async (req, res, next) => {
  const { _id, ...otherInfo } = req.body;

  const result = await userModel.findByIdAndUpdate(
    {
      _id: new ObjectId(_id),
    },
    otherInfo,
    {
      new: true,
    }
  );
  console.log(result);
  res.status(200).json({
    message: "Cap nhat tai khoan thanh cong",
    data: result,
  });
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserByType,
  deleteUser,
  updateUser,
};
