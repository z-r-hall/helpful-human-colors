const express = require('express');
const router = express.Router();
const colorControllers = require('../controllers/colorControllers');

router.get('/:idRandSearch', colorControllers.getColor, (req, res) => {
  res.status(200).json(res.locals.color);
});

router.get('/', colorControllers.getColors, (req, res) => {
  res.status(200).json(res.locals.colors);
});

module.exports = router;
