const express = require('express');

const bodyparser = require('body-parser');
const cityRepository = require('./repository/city-repository');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () => {
  // create the express object
  const app = express();


  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  }); 
}

setupAndStartServer();