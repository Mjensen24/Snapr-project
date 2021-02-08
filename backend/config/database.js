const config = require("./index");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize",
  },
  production: {
    use_env_variable: "postgres://odbdrxuvlphqff:47a6936a94901706e78b1627782282b3cbb8298dc62dcf31110d6c2eb4ea9766@ec2-54-164-241-193.compute-1.amazonaws.com:5432/d1o9f34qs27sis",
    dialect: "postgres",
    seederStorage: "sequelize",
  },
};
