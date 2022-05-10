const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/colab", {});

module.exports = mongoose.connection;
