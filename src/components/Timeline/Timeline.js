import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styles from './Timeline.module.css';
import Event from './Event/Event';

const timeline = (props) => {
  const events = props.events.map((event) => {
    return (
      <Event key={event.id} event={event} selected={props.handleEventSelect} />
    );
  });
  return (
    <div className={styles.Timeline}>
      <VerticalTimeline>{events}</VerticalTimeline>
    </div>
  );
};

export default timeline;
