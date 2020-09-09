## Guidelines

### Sequelize CLI instructions

Project setup using Sequelize with MySQL

- run `npx sequelize-cli init`
- replace the confic/config.js content with the following code, or whatever suits your needs

```
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASS,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_TEST_HOST,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

```

- config your .env file with the required variables
- to create your database run:\
  `npx sequelize-cli db:create to create your database`
- to create models and its migrations run:\
  `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string`
- to run the migrations run:\
  `npx sequelize-cli db:migrate`
- to create seeds for your tables run:\
  `npx sequelize-cli seed:generate --name user`
- clean the generated seed file, and populate the array inside the bulkInsertMethod with your data. your file will be like:

  ```
  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };
  ```

- to seed your database with the inserted data, run:\
  `npx sequelize-cli db:seed:all`
