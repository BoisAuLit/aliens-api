import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

try {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(constants.MONGO_URL, {useNewUrlParser: true});
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', e => {
    throw error;
  });
