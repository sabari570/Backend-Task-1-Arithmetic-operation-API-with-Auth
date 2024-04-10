const Router = require("express");
const authController = require("../controllers/auth-controller");
const { requireAuth } = require("../middlewares/auth-middleware");

const router = Router();

// route for authenticating user
router.post('/authenticate', authController.authenticate);

// route for generating new access token using refresh token
router.post('/regenerate-token', authController.regenerateToken);

module.exports = router;