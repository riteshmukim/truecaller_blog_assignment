require("dotenv").config();
const express = require("express");
const cors = require("cors");

const api = require("./api");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

app.use(express.static("public"));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../../public/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: res.locals.message, error: res.locals.error });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log("Server Listening on port:", PORT);
