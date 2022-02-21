import * as http from 'http';

import { app } from './app';

const server = http.createServer(app);

server.listen(5000, () => {
  console.log('5000th PORT is being listened');
});

process.on('uncaughtException', error => {
  console.log(error);
  server.close(() => {
    process.exit();
  })
});

process.on('unhandledRejection', error => {
  console.log(error);
  server.close(() => {
    process.exit();
  })
});


