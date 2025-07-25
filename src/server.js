import express from 'express';
import User from './models/User.js';
import Sequelize from 'sequelize';
import config from './config/database.js';
import userRoutes from './routes.js';
const app = express();
const sequelize = new Sequelize(config);
User.init(sequelize);

app.use(express.json());
app.use('/usuarios', userRoutes);

sequelize.authenticate()
   .then(() => {
      app.listen(3000, () => console.log('Servidor ON'))
   })
   .catch((err) => {
      console.log(err)
   })