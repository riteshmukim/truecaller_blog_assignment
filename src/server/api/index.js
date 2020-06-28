const router = require("express").Router();
const posts = require("./posts");
const log = require("log4js").getLogger("app");
log.level = process.env.LOGGER_LEVEL;

router.use("/posts", posts);

log.debug("APIs Loaded");

module.exports = router;
