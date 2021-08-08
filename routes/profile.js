const Router = require('express').Router;
const router = new Router();
const passport = require('passport');
const controller = require('../controllers/profile');

// http://localhost/api/profile
router.get('/', passport.authenticate('jwt', {session: false}), controller.getProfile);

module.exports = router;
