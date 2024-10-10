import app from './app.js';
const port = process.env.PORT || 3000;

const server = (port) => {
  try {
    app.listen(port);
  } catch (error) {
    console.log({ Error: error || 'error in server' });
  }
};

server(port);
