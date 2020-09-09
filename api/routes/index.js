const { json } = require('express');

const exampleRoutes = require('./exampleRoute');

module.exports = (app) => {
  app.use(json(), exampleRoutes);
};
