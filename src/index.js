/* eslint-disable no-console */

/**
 * To be able to use the "import" keyword, we will have to
 * use transpilers, that's why we installed babel.
 * If we don't have babel, we will have to use old syntax
 * like "var xxx = require('***')" which is quite ugly and limited
 */

import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middleware';
import apiRoutes from './modules';


const app = express();
middlewareConfig(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${constants.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great!
    `);
  }
});
