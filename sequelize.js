// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize({
//   host: 'localhost',
//   dialect: 'mssql',
//   username: 'sequalize_db',
//   password: 'mahi4321',
//   database: 'webapplicationsoln',
//   port: 1433, // Ensure this is set correctly
//   dialectOptions: {},});
// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// console.log(require('./user/models/usermodel')); // This will log what is being returned from the model file
// db.User = require('./user/models/usermodel')//(sequelize, DataTypes); // This should now work
// module.exports = db;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('webapplicationsoln', 'mahi', 'Mahi@4321', {
  host: 'localhost',  // your SQL Server instance
  dialect: 'mssql',   // use 'mssql' for Microsoft SQL Server
  port: 1433,         // Default port for SQL Server
  dialectOptions: {
    instanceName: 'SQLEXPRESS',
    encrypt: false, // Set to true if you're using Azure
    trustServerCertificate: true, // For self-signed certificates
  },
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
//   const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
//   console.log(require('./user/models/usermodel')); // This will log what is being returned from the model file
//   User = require('../models/usermodel')//(sequelize, DataTypes); // This should now work
//   module.exports = db;
// module.exports = sequelize;
module.exports = { sequelize, Sequelize };
