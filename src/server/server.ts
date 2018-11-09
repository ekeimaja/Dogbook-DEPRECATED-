import * as express from 'express';
import {sequelize} from './database';
import {dogs} from './routes/routes';

const hostname = 'localhost';
const port = 3000;

const server = express();

server.get('/api/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

// initiate connection to db
const mysequelize = sequelize;
// add currencies route
server.use('/api/dogs', dogs);

server.listen(port, hostname, () => {
  // connect to the DB
  console.log(`Server running at http://${hostname}:${port}/`);
});
