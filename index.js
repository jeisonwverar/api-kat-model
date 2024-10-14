import app from './app.js';
import environmentVariable from './src/config/config.js';
import sequelize from './src/database/database.js';

const port = environmentVariable.PORT || 3000;

const server = async() => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    console.log('Database sync successful.');
  } catch (error) {
    console.log({ Error: error || 'error in server' });
  }
};

server();
