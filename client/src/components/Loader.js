import React from 'react';

const Loader = props => {
  if (props.showLoader) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui big text loader">{props.message}</div>
      </div>
    );
  }

  return null;
};

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
