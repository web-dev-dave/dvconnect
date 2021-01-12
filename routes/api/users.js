const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  body('name', 'Name is required')
    .not()
    .isEmpty(),  
  // email must be an email
  body('email', 'Please include a valid email').isEmail(),
  // password must be at least 5 chars long
  body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body)
    res.send('User route')
})

module.exports = router