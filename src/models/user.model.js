const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    age: {
      type: Number,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
      trim: true,
    },
    gender: {
      type: String,
      required: false,
      enum: ["male", "female", "lgbt"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
      unique: true,
      // validate: {
      //   // validate email, nếu ko phải email hợp lệ thì trả về lỗi với message "Invalid Email"
      //   validator: function (value) {
      //     return validator.isEmail(value);
      //   },
      //   message: "Invalid Email",
      // },
    },
    password: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: false,
      trim: true,
    },

    accountType: {
      type: String,
      required: false,
    },

    role: {
      type: String,
      required: false,
      enum: ["user", "doctor", "admin"], // role của user là 1 trong 3 giá trị này
      default: "user",
    },
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt vào user document khi tạo
    versionKey: false, // Loại bỏ thuộc tính __v (version key) ở đầu ra query lấy data
  }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
