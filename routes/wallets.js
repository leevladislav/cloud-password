const Router = require('express').Router;
const router = new Router();
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/wallets');

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);
router.patch('/add-income/:id', passport.authenticate('jwt', {session: false}), controller.addIncome);

module.exports = router;
