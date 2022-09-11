import express from 'express';

const router = express.Router();

const userController = require('./user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;


