const Router = require('express').Router;
const router = new Router();
const controller = require('../controllers/auth');

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;
