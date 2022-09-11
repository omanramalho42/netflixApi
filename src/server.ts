const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

import { 
  Request, 
  Response, 
  NextFunction 
} from "express";

const app = express();
app.use(bodyParser.json());

const router = express.Router();

dotenv.config();

app.listen(process.env.REACT_API_PORT || 3001, () => {
  console.log('[Server 🦇] Running on port: ' + process.env.REACT_API_PORT || 3001);
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const message = 'Successo';
    
    return res.status(201).json({ message });
  } catch (error) {
    next(error);
  }
});

// app.use('/api', router);

