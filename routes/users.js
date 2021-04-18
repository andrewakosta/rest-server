const {Router} = require('express');

const {userGet, userPut, userDelete, createUser} =  require('../controllers/users');

const router = Router();

router.get('/', userGet);
router.post('/', createUser);
router.put('/:id', userPut);
router.delete('/', userDelete);


module.exports = router;