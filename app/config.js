import 'dotenv/config.js';

export const port = process.env.PORT || 3000;
export const database =
  process.env.DATABASE || 'mongodb://127.0.0.1:27017/cookbook-backend';
export const sessionKeySecret = process.env.SESSION_KEY_SECRET;
