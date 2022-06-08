module.exports = (sequelize, type) => {
  return sequelize.define("cuenta", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saldo: type.STRING,
    codigoCuenta: type.STRING,
  });
};
