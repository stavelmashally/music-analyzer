import React from 'react';

const Loader = ({ message }) => {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui big text loader">{message}</div>
      </div>
    );
};

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
