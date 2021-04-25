const {Router} = require('express');
const { check } = require('express-validator');

const {userGet, userPut, userDelete, createUser} =  require('../controllers/users');

const router = Router();

router.get('/', userGet);
router.post('/',[
    check('email','Mensage del middleware, el correo debe ser un correo valido').isEmail()
], createUser);
router.put('/:id', userPut);
router.delete('/', userDelete);


module.exports = router;