const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

import { 
  Request, 
  Response, 
  NextFunction 
} from "express";

const app = express();
app.use(bodyParser.json());

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Mongodb connection successful'))
  .catch((error: any) => console.log('Ocorreu um erro durante a conexao com o banco de dados: ' + error.message))

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

