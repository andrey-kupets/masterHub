export const config = {
  PORT: process.env.PORT || 5000,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:5000',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/masterHub',
};
