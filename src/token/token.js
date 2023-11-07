const jwt = require("jsonwebtoken");

// Hàm accessToken để tạo token JWT
const accessToken = (userId, role) => {
//   const expiresIn = "1d"; // Thời gian hết hạn của token (1 ngày trong trường hợp này)
//   const secretKey = process.env.JWT_ACCESS_KEY; // Sử dụng khóa bí mật từ biến môi trường hoặc .env

  // Sử dụng jwt.sign để tạo token JWT
  const accessToken = jwt.sign({ userId, role }, 'jwt', { expiresIn: '1d' });

  return accessToken;
};

const verifyToken = (accessToken) => {
  const verify = jwt.verify(accessToken, "jwt");
};

const refreshToken = (userId, role)=>{
    const refreshToken = jwt.sign({ userId, role }, "jwt", { expiresIn: "365d" });

    return refreshToken
}

module.exports = {
  accessToken,
  verifyToken,
  refreshToken,
};
