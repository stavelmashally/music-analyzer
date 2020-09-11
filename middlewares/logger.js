const morgan = require('morgan');

module.exports = () => {
  morgan.token('custom', ':http-version (:method) :url => :status');
  return morgan('custom');
};
