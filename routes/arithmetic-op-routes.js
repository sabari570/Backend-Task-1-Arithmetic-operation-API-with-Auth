const Router = require("express");
const { requireAuth } = require("../middlewares/auth-middleware");
const { addition, subtraction, multiplication, division } = require("../controllers/arithmetic-op-controller");

const router = Router();

// route for adding two numbers
router.get('/add', requireAuth, addition);

// route for subtracting two numbers
router.get('/subtract', requireAuth, subtraction);

// route for multiplying two numbers
router.get('/multiply', requireAuth, multiplication);

// route for dividing two numbers
router.get('/divide', requireAuth, division);

module.exports = router;