import React from 'react';

const expandedEvent = (props) => {
  if (!props.event) {
    return null;
  } else {
    return (
      <React.Fragment>
        <h1>{props.event.title}</h1>
        <p>{props.event.description}</p>
      </React.Fragment>
    );
  }
};

export default expandedEvent;
