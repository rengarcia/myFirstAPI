const router = require("express").Router();

const apiFilmsRouter = require("./api/films");
const apiCuentaRouter = require("./api/cuenta");

router.use("/films", apiFilmsRouter);

router.use("/cuenta", apiCuentaRouter);

module.exports = router;
