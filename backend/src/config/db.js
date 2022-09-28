const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://myhours:myhours@cluster0.oet0qta.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
