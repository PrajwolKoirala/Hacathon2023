
const { default: mongoose } = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/indigeneousDB')
  .then(() => console.log('Connected!'));
