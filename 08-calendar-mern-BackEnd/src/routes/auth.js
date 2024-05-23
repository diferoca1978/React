/*
  User Routes / auth
  host + api/auth
*/

const { registerUser, renew, loginUser } = require('../controllers/auth');

const { Router } = require('express');

const {
  singUpValidations,
  singInValidations,
} = require('../middlewares/authValidations');

const router = Router();

router.post('/', [singInValidations], loginUser);

router.post('/singup', [singUpValidations], registerUser);

router.get('/renew', [], renew);

module.exports = router;
