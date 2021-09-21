const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { bdd } = require('./database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.database();
    this.middlewares();
    this.router();
  }

  async database() {
    try {
      await bdd.authenticate();
      console.log('Database connected');
    } catch (error) {
      console.log(error);
    }
  }

  router() {
    const routerConfig = {
      tags: {
        path: '/api/tags',
        route: require('./routes/tags.router'),
      },
    };

    this.app.use(routerConfig.tags.path, routerConfig.tags.route);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Listening at port ${this.port}`);
    });
  }
}

module.exports = Server;
