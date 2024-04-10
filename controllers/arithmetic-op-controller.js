// controller for adding two numbers
module.exports.addition = (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 && num2) {
      const sum = parseFloat(num1) + parseFloat(num2);
      return res
        .status(200)
        .json({ num1: parseFloat(num1), num2: parseFloat(num2), sum });
    } else {
      return res.status(400).json({ message: "Both num1 and num2 are required" });
    }
  };
  
  // controller for subtracting two numbers
  module.exports.subtraction = (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 && num2) {
      const difference = parseFloat(num1) - parseFloat(num2);
      return res
        .status(200)
        .json({ num1: parseFloat(num1), num2: parseFloat(num2), difference });
    } else {
      return res.status(400).json({ message: "Both num1 and num2 are required" });
    }
  };
  
  // controller for multiplying two numbers
  module.exports.multiplication = (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 && num2) {
      const product = parseFloat(num1) * parseFloat(num2);
      return res
        .status(200)
        .json({ num1: parseFloat(num1), num2: parseFloat(num2), product });
    } else {
      return res.status(400).json({ message: "Both num1 and num2 are required" });
    }
  };
  
  // controller for dividing two numbers
  module.exports.division = (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 && num2) {
      if (parseFloat(num2) === 0) {
        return res.status(400).json({ message: "Cannot divide by zero" });
      }
      const quotient = parseFloat(num1) / parseFloat(num2);
      return res
        .status(200)
        .json({ num1: parseFloat(num1), num2: parseFloat(num2), quotient });
    } else {
      return res.status(400).json({ message: "Both num1 and num2 are required" });
    }
  };
  