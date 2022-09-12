const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const authRoute = require('./Routes/Auth/auth.route');
const userRoute = require('./Routes/User/user.route');
const movieRoute = require('./Routes/Movies/movie.route');

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
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);


