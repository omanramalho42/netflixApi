import express from 'express';

const router = express.Router();

const authController = require('./auth.controller');

router.post('/register', authController.register);
router.get('/login', authController.login);

module.exports = router;