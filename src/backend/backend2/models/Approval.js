const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);

const approvalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    approvalType: {
      type: String,
      required: true,
      trim: true,
    },

    authority: {
      type: String,
      required: true,
      trim: true,
    },

    applicationNumber: {
      type: String,
      trim: true,
      uppercase: true,
    },

    status: {
      type: String,
      enum: [
        "draft",
        "submitted",
        "under_review",
        "approved",
        "rejected",
      ],
      default: "draft",
      index: true,
    },

    documents: {
      type: [documentSchema],
      default: [],
    },

    remarks: {
      type: String,
      trim: true,
      default: "",
    },

    submittedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

approvalSchema.index({ userId: 1, status: 1 });

module.exports = mongoose.model("Approval", approvalSchema);