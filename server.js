const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/user.routes");
const authRoutes = require("./src/routes/auth.routes");
const medicalSpecialtyRoutes = require("./src/routes/medical-specialty.routes");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

mongoose.set("strictQuery", false); // Hoặc true nếu bạn muốn sử dụng tùy chọn strictQuery

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/booking");
}
app.listen(3001, () => {
  console.log("Server started on port 3001");
});

//router
app.use("/api/user", userRoutes);
app.use("/api/", authRoutes);
app.use("/api/", medicalSpecialtyRoutes);

//medicalSpecialty
