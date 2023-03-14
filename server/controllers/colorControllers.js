const Colors = require('../models/colorModels');

const colorControllers = {};

colorControllers.getColors = async (req, res, next) => {
  try {
    res.locals.colors = await Colors.find().exec();
    return next();
  } catch (err) {
    return next({
      log: `Error occured in getColors middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when getting color data' },
    });
  }
};

colorControllers.getColor = async (req, res, next) => {
  try {
    const { idRandSearch } = req.params;
    res.locals.color = await Colors.findOne({
      idRandSearch,
    }).exec();
    return next();
  } catch (err) {
    return next({
      log: `Error occured in getColors middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when getting color data' },
    });
  }
};

module.exports = colorControllers;
