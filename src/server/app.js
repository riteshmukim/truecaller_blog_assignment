require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const log = require("log4js").getLogger("app");

const api = require("./api");

const app = express();

log.level = process.env.LOGGER_LEVEL;

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(";")
  : [];

app.use(
  cors(async (req, callback) => {
    let corsOptions = {
      origin: !req.headers.origin,
      optionsSuccessStatus: 200,
    };
    if (
      req.headers.origin &&
      ALLOWED_ORIGINS.indexOf(req.headers.origin) !== -1
    ) {
      corsOptions.origin = true;
    }
    if (corsOptions.origin) {
      callback(null, corsOptions);
    } else {
      callback(new Error(`Invalid origin: ${req.headers.origin}`));
    }
  })
);

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

const staticPath = path.join(__dirname, "../../public");

app.use(express.static(staticPath));

app.use("*", function (req, res) {
  res.sendFile("index.html", { root: staticPath }, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  log.error(`application error: ${err.stack}`);

  // render the error page
  res.status(err.status || 500);
  res.json({ message: res.locals.message, error: res.locals.error });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
log.info("Server Listening on port:", PORT);
