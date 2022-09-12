import express from 'express';

const router = express.Router();

const userController = require('./user.controller');

const {
  verifyToken,
  verifyTokenAndAdmin
} = require('../../utils/jwt.service');

router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', verifyTokenAndAdmin, userController.getUser);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;


