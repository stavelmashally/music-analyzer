import React from 'react';

const Loader = ({ showLoader, message }) => {
  if (showLoader) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui big text loader">{message}</div>
      </div>
    );
  }

  return null;
};

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
