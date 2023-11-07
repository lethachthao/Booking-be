const userModel = require("../models/user.model")
// const jwt = require("jsonwebtoken")
const jwt = require("../token/token")

// const token = {
//   accessToken:{
//           token: jwt.sign({ userId: user._id, role: 'user' }, 'jwt', { expiresIn: '1d' })
//           }
  
// }

const loginController = async (req, res, next)=>{
    const {email, password} = req.body;

    const user  = await userModel.findOne({email})
    if(!user){
      return res.status(401).json({error: 'email khong ton tai'})
    }
    if(user.password !== password){
      return res.status(401).json({error: 'Sai mat khau'})
    }
      const data = {
        accessToken: jwt.accessToken(user._id, 'user'),
        refreshToken: jwt.refreshToken(user._id, 'user')
        
      }

    res.status(200).json(data)

}
const registerContrller = (req, res, next)=>{
    
}

module.exports = {
  loginController,
  registerContrller,
};