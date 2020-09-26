import React from 'react';

const Loader = ({ message }) => {
  return <div className="ui active inline loader"></div>;
};

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
