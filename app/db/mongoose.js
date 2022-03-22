import mongoose from 'mongoose';
import { database } from '../config.js';

mongoose.connect(database);

mongoose.connection.once('open', () => {
  console.log('Database connected');
});

// mongoose.connection.dropCollection('dishes', () => {});

mongoose.connection.on('error', (err) => {
  console.error(`Database error: ${err}`);
});
