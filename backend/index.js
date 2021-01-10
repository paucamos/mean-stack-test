"use strict";
const mongoose = require("mongoose");
const app = require("./app");
const port = 3700;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database conected");
    // Creacion del server
    app.listen(port, () => {
      console.log("Server Init at port: localhost:" + port);
    });
  })
  .catch((error) => console.log(error));
