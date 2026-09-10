const mongoose = require("mongoose");

const turnoverRangeSchema = new mongoose.Schema(
  {
    min: {
      type: Number,
      default: 0,
      min: 0,
    },

    max: {
      type: Number,
      default: null,
      min: 0,
    },
  },
  {
    _id: false,
  }
);

const eligibilitySchema = new mongoose.Schema(
  {
    industries: {
      type: [String],
      default: [],
    },

    businessTypes: {
      type: [String],
      default: [],
    },

    locations: {
      type: [String],
      default: [],
    },

    turnoverRange: {
      type: turnoverRangeSchema,
      default: {},
    },
  },
  {
    _id: false,
  }
);

const schemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    benefits: {
      type: [String],
      default: [],
    },

    eligibility: {
      type: eligibilitySchema,
      default: {},
    },

    requiredDocuments: {
      type: [String],
      default: [],
    },

    applicationLink: {
      type: String,
      trim: true,
    },

    deadline: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Scheme", schemeSchema);