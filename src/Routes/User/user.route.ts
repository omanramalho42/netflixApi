import express from 'express';

const router = express.Router();

const userController = require('./user.controller');

const {
  verifyToken
} = require('../../utils/jwt.service');

router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;


