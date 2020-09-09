require('dotenv').config;
const app = require('./server/index');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running at port: ${port}.`));

module.exports = app;
