const {Router} = require('express');
const { check } = require('express-validator');

const {userGet, userPut, userDelete, createUser} =  require('../controllers/users');
const { validator } = require('../middlewares/validdator');

const router = Router();

router.get('/', userGet);
router.post('/',[
    check('name', 'El name es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mayor a 6 characters').isLength({min:6}),
    check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('email','Mensage del middleware, el correo debe ser un correo valido').isEmail(),
    validator
], createUser);
router.put('/:id', userPut);
router.delete('/', userDelete);


module.exports = router;