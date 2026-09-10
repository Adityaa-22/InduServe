
const express = require("express");
const connectDB = require("./config/db");

const User = require("./models/User");
const Approval = require("./models/Approval");
const Notification = require("./models/notifications");
const Compliance = require("./models/Compliance");
const Scheme = require("./models/scheme");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/auth");

const app = express();

app.use(express.json());

connectDB();


// =====================================================
// HOME
// =====================================================

app.get("/", (req, res) => {
  res.send("Hello from InduServe!");
});


// =====================================================
// TEST APPROVAL
// =====================================================

app.get("/test-approval", async (req, res) => {
  try {
    const approvals = await Approval.find();

    res.json(approvals);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching approvals",
      error: error.message,
    });
  }
});


// =====================================================
// USER SIGNUP
// =====================================================

app.post("/auth/signup", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      businessName,
      businessType,
      industry,
    } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      businessName,
      businessType,
      industry,
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});


// =====================================================
// USER LOGIN
// =====================================================

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      "udyogsetu_secret_key",
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        businessName: user.businessName,
        businessType: user.businessType,
        industry: user.industry,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login error",
      error: error.message,
    });
  }
});


// =====================================================
// APPROVAL MANAGEMENT
// =====================================================


// -------------------- CREATE APPROVAL --------------------

app.post("/approvals", authMiddleware, async (req, res) => {
  try {
    const approval = new Approval({
      ...req.body,
      userId: req.userId,
    });

    const savedApproval = await approval.save();

    res.status(201).json(savedApproval);
  } catch (error) {
    res.status(400).json({
      message: "Error creating approval",
      error: error.message,
    });
  }
});


// -------------------- GET ALL APPROVALS --------------------

app.get("/approvals", authMiddleware, async (req, res) => {
  try {
    const approvals = await Approval.find({
      userId: req.userId,
    });

    res.json(approvals);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching approvals",
      error: error.message,
    });
  }
});


// -------------------- GET ONE APPROVAL --------------------

app.get("/approvals/:id", authMiddleware, async (req, res) => {
  try {
    const approval = await Approval.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!approval) {
      return res.status(404).json({
        message: "Approval not found",
      });
    }

    res.json(approval);
  } catch (error) {
    res.status(400).json({
      message: "Error fetching approval",
      error: error.message,
    });
  }
});


// -------------------- UPDATE APPROVAL STATUS --------------------

app.patch("/approvals/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "draft",
      "submitted",
      "under_review",
      "approved",
      "rejected",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }

    const approval = await Approval.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.userId,
      },
      {
        status: status,
        ...(status === "submitted"
          ? { submittedAt: new Date() }
          : {}),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!approval) {
      return res.status(404).json({
        message: "Approval not found",
      });
    }

    res.json({
      message: "Approval status updated successfully",
      approval: approval,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating approval status",
      error: error.message,
    });
  }
});


// =====================================================
// COMPLIANCE MANAGEMENT
// =====================================================


// -------------------- CREATE COMPLIANCE --------------------

app.post("/compliance", authMiddleware, async (req, res) => {
  try {
    const compliance = new Compliance({
      ...req.body,
      userId: req.userId,
    });

    const savedCompliance = await compliance.save();

    res.status(201).json({
      message: "Compliance created successfully",
      compliance: savedCompliance,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating compliance",
      error: error.message,
    });
  }
});


// -------------------- GET MY COMPLIANCE --------------------

app.get("/compliance", authMiddleware, async (req, res) => {
  try {
    const compliances = await Compliance.find({
      userId: req.userId,
    }).sort({ dueDate: 1 });

    res.json(compliances);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching compliance records",
      error: error.message,
    });
  }
});


// =====================================================
// GOVERNMENT SCHEMES
// =====================================================


// -------------------- CREATE SCHEME --------------------

app.post("/schemes", authMiddleware, async (req, res) => {
  try {
    const scheme = new Scheme(req.body);

    const savedScheme = await scheme.save();

    res.status(201).json({
      message: "Government scheme created successfully",
      scheme: savedScheme,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating government scheme",
      error: error.message,
    });
  }
});


// -------------------- GET ALL SCHEMES --------------------

app.get("/schemes", authMiddleware, async (req, res) => {
  try {
    const schemes = await Scheme.find();

    res.json(schemes);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching government schemes",
      error: error.message,
    });
  }
});


// =====================================================
// NOTIFICATIONS
// =====================================================


// -------------------- CREATE NOTIFICATION --------------------

app.post("/notifications", authMiddleware, async (req, res) => {
  try {
    const {
      type,
      title,
      message,
      relatedId,
      channel,
    } = req.body;

    const notification = new Notification({
      userId: req.userId,
      type,
      title,
      message,
      relatedId,
      channel,
    });

    const savedNotification = await notification.save();

    res.status(201).json({
      message: "Notification created successfully",
      notification: savedNotification,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating notification",
      error: error.message,
    });
  }
});


// -------------------- GET MY NOTIFICATIONS --------------------

app.get("/notifications", authMiddleware, async (req, res) => {
  try {
    const notifications = await Notification.find({
      userId: req.userId,
    }).sort({ createdAt: -1 });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching notifications",
      error: error.message,
    });
  }
});


// -------------------- MARK NOTIFICATION AS READ --------------------

app.patch(
  "/notifications/:id/read",
  authMiddleware,
  async (req, res) => {
    try {
      const notification = await Notification.findOneAndUpdate(
        {
          _id: req.params.id,
          userId: req.userId,
        },
        {
          read: true,
        },
        {
          new: true,
        }
      );

      if (!notification) {
        return res.status(404).json({
          message: "Notification not found",
        });
      }

      res.json({
        message: "Notification marked as read",
        notification: notification,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error updating notification",
        error: error.message,
      });
    }
  }
);


// =====================================================
// START SERVER
// =====================================================

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

