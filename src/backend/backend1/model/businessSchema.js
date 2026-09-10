import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  businessName: {
    type: String,
    required: true
  },

  bussinessType: {
    type: String,
    required: true
  },

  industry: {
    type: String,
    required: true
  },

  registrationNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },


});

 

businessSchema.index({ userId: 1, createdAt: -1 });

const Business = mongoose.model("Business", businessSchema);

export default Business;