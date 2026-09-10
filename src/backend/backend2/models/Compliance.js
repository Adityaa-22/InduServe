const mongoose = require("mongoose");

const complianceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    dueDate: {
      type: Date,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "overdue", "not_applicable"],
      default: "pending",
      index: true,
    },

    frequency: {
      type: String,
      enum: [
        "one_time",
        "daily",
        "weekly",
        "monthly",
        "quarterly",
        "half_yearly",
        "yearly",
      ],
      default: "one_time",
    },

    reminderDays: {
      type: Number,
      default: 7,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

complianceSchema.index({ userId: 1, dueDate: 1 });
complianceSchema.index({ userId: 1, status: 1 });

module.exports = mongoose.model("Compliance", complianceSchema);