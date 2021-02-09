var config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};
