import express from 'express';
import { verifyToken, verifyTokenAndAdmin } from '../../utils/jwt.service';

const router = express.Router();

const MovieController = require('./movie.controller');

router.post('/', verifyTokenAndAdmin, MovieController.insertMovie);
router.get('/', verifyToken, MovieController.getMovies);
router.get('/:id', verifyToken, MovieController.getMovie);
router.put('/:id', verifyTokenAndAdmin, MovieController.updateMovie);
router.delete('/:id', verifyTokenAndAdmin, MovieController.deleteMovie);

module.exports = router;