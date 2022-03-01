import 'dotenv/config.js';

export const port = process.env.PORT || 3000;
export const database =
  process.env.DATABES || 'mongodb://127.0.0.1:27017/cookbook-backend';
