const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const FilmModel = require("./models/films");

const CuentaModel = require("./models/cuenta");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_ID,
  process.env.DATABASE_PASSWORD,
  {
    host: "remotemysql.com",
    dialect: "mysql",
  }
);

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas Sincronizadas");
});

const Cuenta = CuentaModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronziadas");
});

module.exports = {
  Film,
  Cuenta,
};
