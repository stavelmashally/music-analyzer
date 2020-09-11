const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');

const app = express();

app.use(logger());
app.use(bodyParser.json());

require('./routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
});
