const Router = require('express').Router;
const router = new Router();
const passport = require('passport');
const controller = require('../controllers/order');

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);

module.exports = router;
