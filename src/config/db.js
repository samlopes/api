const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/aulanodejs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
