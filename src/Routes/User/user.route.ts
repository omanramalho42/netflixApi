import express from 'express';

const router = express.Router();

const userController = require('./user.controller');

router.get('/:id', userController.getUser);

module.exports = router;


