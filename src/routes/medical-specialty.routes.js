const express = require("express");
const medicalSpecialty = require("../controllers/medical-specialty.controller");
const uploadCloud = require("../middlewares/upload-middleware");

const router = express.Router();

router.get("/allMedicalSpecialty", medicalSpecialty.getMedicalSpecialty);
router.post(
  "/createMedicalSpecialty",
  uploadCloud.single("avatar"),
  medicalSpecialty.createMedicalSpecialty
);
router.post("/updateMedicalSpecialty", medicalSpecialty.updateMedicalSpecialty);

module.exports = router;
