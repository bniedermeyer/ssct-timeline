import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const event = (props) => {
  const event = props.event;
  const direction = event.id % 2 === 0 ? 'right' : 'left';
  return (
    <VerticalTimelineElement date={event.date} position={direction}>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </VerticalTimelineElement>
  );
};

export default event;
