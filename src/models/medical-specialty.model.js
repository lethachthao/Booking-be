const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Add this line to import the Schema object

const medicalSpecialtySchema = new Schema(
  {
    // Use Schema from mongoose
    name: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    avatar: {
      type: Schema({
        filename: { type: String, required: true },
        path: { type: String, required: true },
      }),
      required: false,
    },

    // Bác sĩ trong chuyên khoa
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MedicalSpecialtyModel = mongoose.model(
  "medicalSpecialty",
  medicalSpecialtySchema
);

module.exports = MedicalSpecialtyModel;
