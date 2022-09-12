import express from 'express';
import { verifyToken, verifyTokenAndAdmin } from '../../utils/jwt.service';

const router = express.Router();

const ListController = require('./list.controller');

router.post('/', verifyTokenAndAdmin, ListController.createList);
router.get('/', verifyToken, ListController.getList);
router.get('/:id', verifyToken, ListController.getListById);
router.put('/:id', verifyTokenAndAdmin, ListController.updateList);
router.delete('/:id', verifyTokenAndAdmin, ListController.deleteList);

module.exports = router;