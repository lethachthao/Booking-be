const mongoose = require("mongoose");
const MedicalSpecialtyModel = require("../models/medical-specialty.model");
const { ObjectId } = mongoose.Types;

//Lay tat ca chuyen khoa
const getMedicalSpecialty = async (req, res, next) => {
  const result = await MedicalSpecialtyModel.find({});
  res.status(200).json({ data: result });
};

//Tao chuyen khoa
const createMedicalSpecialty = async (req, res, next) => {
  const { name, description } = req.body;
  const { filename, path } = req.file;
  console.log(filename);

  const result = await MedicalSpecialtyModel.create({
    name,
    description,
    // members,
    avatar: {
      filename,
      path,
    },
  });
  res.status(200).json({
    message: "Tạo chuyên khoa thành công!",
    data: result,
  });
};

//Cap nhat chuyen khoa
const updateMedicalSpecialty = async (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const result = await MedicalSpecialtyModel.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    { name, description, members },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Cap nhat chuyen khoa thanh cong: ", data: result });
};

module.exports = {
  getMedicalSpecialty,
  createMedicalSpecialty,
  updateMedicalSpecialty,
};
