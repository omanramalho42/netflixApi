const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const authRoute = require('./Routes/Auth');

const app = express();
app.use(bodyParser.json());

dotenv.config();

mongoose.connect(process.env.MONGODB_URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Mongodb connection successful'))
  .catch((error: any) => console.log('Ocorreu um erro durante a conexao com o banco de dados: ' + error.message))

app.listen(process.env.REACT_API_PORT || 3001, () => {
  console.log('[Server 🦇] Running on port: ' + process.env.REACT_API_PORT || 3001);
});

app.use('/api/auth', authRoute);


