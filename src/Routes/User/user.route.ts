import express from 'express';
import { verifyTokenAndAuthorization } from '../../utils/jwt.service';

const router = express.Router();

const userController = require('./user.controller');

const {
  verifyToken,
  verifyTokenAndAdmin
} = require('../../utils/jwt.service');

router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', verifyTokenAndAuthorization, userController.getUser);
router.put('/:id', verifyTokenAndAdmin, userController.updateUser);
router.delete('/:id', verifyTokenAndAdmin, userController.deleteUser);

module.exports = router;


