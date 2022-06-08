const router = require("express").Router();

const { Cuenta } = require("../../db");

router.get("/", async (req, res) => {
  const cuentas = await Cuenta.findAll();
  res.json(cuentas);
});

router.post("/", async (req, res) => {
  const cuenta = await Cuenta.create(req.body);
  res.json(cuenta);
});

router.put("/:cuentaId", async (req, res) => {
  await Cuenta.update(req.body, {
    where: { id: req.params.cuentaId },
  });
  res.json({ sucess: "Se ha modificado" });
});

router.delete("/:cuentaId", async (req, res) => {
  await Cuenta.destroy({ where: { id: req.params.cuentaId } });
  res.json({ sucess: "Se ha borrado la pelicula" });
});

module.exports = router;
