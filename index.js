import app from './app.js';
import environmentVariable from './src/config/config.js';
import sequelize from './src/database/database.js';

const port = environmentVariable.PORT || 3000;

const server = async() => {
  try {
    await sequelize.authenticate();
    app.listen(port);

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log({ Error: error || 'error in server' });
  }
};

server();
