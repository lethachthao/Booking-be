const userModel = require("../models/user.model");

const createNewUser = async (req, res, next)=>{
    const register = await userModel.create(req.body);
    res.status(200).json({data: register})
}

const getAllUser = async (req, res, next)=>{
    const allUser = await userModel.find({})
    res.status(200).json({data: allUser})
}

module.exports = {
    createNewUser,
    getAllUser
}