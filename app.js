const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');

const app = express();

app.use(logger());
app.use(bodyParser.json());

require('./routes')(app);

if (process.env.NODE_ENV === 'production') {
  // Serve up production assets
  app.use(express.static('client/build'));

  // Serve up the index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
});
