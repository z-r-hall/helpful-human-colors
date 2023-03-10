require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ColorData',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const colorsSchema = new mongoose.Schema({
  colorHex: { type: String, required: true },
  idRandSearch: { type: Number, required: true },
});

module.exports = mongoose.model('colors', colorsSchema);
