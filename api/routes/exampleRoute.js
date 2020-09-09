const { Router } = require('express');
const ExampleController = require('../controllers/ExampleController');

const router = Router();
router.get('/example', ExampleController.exampleGetMethod).post('/example', ExampleController.examplePostMethod);

module.exports = router;
