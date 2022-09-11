const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

import { 
  Request, 
  Response, 
  NextFunction 
} from "express";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());

dotenv.config();

const mongooseUrl = 'mongodb+srv://omanramalho:oman120600@cluster0.5w65jqc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongooseUrl)
  .then(() => console.log('Mongodb connection successful'))
  .catch((error) => console.log('Ocorreu um erro durante a conexao com o banco de dados: ' + error.message))

app.listen(process.env.REACT_API_PORT || 3001, () => {
  console.log('[Server 🦇] Running on port: ' + process.env.REACT_API_PORT || 3001);
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const message = 'Successo';
    console.log(req.params, 'req params');
    
    return res.status(201).json({ message });
  } catch (error) {
    next(error);
  }
});

// app.use('/api', router);

