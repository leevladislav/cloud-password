const Router = require('express').Router;
const router = new Router();
const passport = require('passport');
const controller = require('../controllers/safe');

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controller.getByCategoryId);
router.get('/item/:id', passport.authenticate('jwt', {session: false}), controller.getById);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);

module.exports = router;
