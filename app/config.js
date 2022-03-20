import 'dotenv/config.js';

export const port = process.env.PORT || 3000;
export const database =
  process.env.DB_CONNECT;
export const sessionKeySecret = process.env.SESSION_KEY_SECRET;
