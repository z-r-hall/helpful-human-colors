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

// colorControllers.deleteColor = async (req, res, next) => {
//   try {
//     const { idRandSearch } = req.params;
//     res.locals.deletedColor = await Colors.deleteOne({
//       idRandSearch,
//     }).exec();
//     return next();
//   } catch (err) {
//     return next({
//       log: `Error occured in getColors middleware, ${err}`,
//       status: 400,
//       message: { err: 'An error occurred when getting color data' },
//     });
//   }
// };

//used to create initial database colors with a for loop saved in the constants folder
colorControllers.createColor = async (req, res, next) => {
  try {
    const { colorHex, idRandSearch } = req.body;
    console.log(colorHex, idRandSearch);
    res.locals.created = await Colors.create({
      colorHex,
      idRandSearch,
    });
    return next();
  } catch (err) {
    return next({
      log: `Error occured in createColor middleware, ${err}`,
      status: 400,
      message: { err: 'An error occurred when creating color data' },
    });
  }
};

module.exports = colorControllers;
