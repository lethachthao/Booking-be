// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const { nanoid } = require("nanoid");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET_KEY,
// });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "itooth",
//     allowFormats: ["jpg", "jpeg", "png"],
//     public_id: (req, file) => nanoid(),
//   },
// });

// const uploadMiddleware = (params = {}) => {
//   return multer({ storage: storage(params) });
// };

// module.exports = uploadMiddleware;

const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "itooth",
  api_key: "657934383293274",
  api_secret: "HK8iLxKO8_ChdofGU49VApVFvt4",
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "tulam",
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
