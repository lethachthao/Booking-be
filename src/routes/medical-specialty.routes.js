const express = require("express");
const medicalSpecialty = require("../controllers/medical-specialty.controller");

const router = express.Router();

router.get("/allMedicalSpecialty", medicalSpecialty.getMedicalSpecialty);
router.post("/createMedicalSpecialty", medicalSpecialty.createMedicalSpecialty);
router.post("/updateMedicalSpecialty", medicalSpecialty.updateMedicalSpecialty);

module.exports = router;
