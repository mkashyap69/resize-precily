const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const MessageController = require('./controller/MessageController');
const errorController = require('./controller/ErrorController');
const app = express();
const port = 9000 || process.env.PORT;
const os = require('os');
const cluster = require('cluster');

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB started');
  })
  .catch((err) => {
    console.log(err.message);
  });

if (cluster.isMaster) {
  const numCpus = os.cpus().length;

  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    console.log(`Worker Died`);
    cluster.fork();
  });
} else {
  app
    .route('/')
    .get(MessageController.getMessages)
    .post(MessageController.addMessage)
    .patch(MessageController.putMessage);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });

  app.use(errorController);

  app.listen(port, () => {
    console.log(`Server started on ${port} `);
  });
}
