import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Plus from '../../Icons/Plus/Plus';
import styles from './Event.module.css';

const event = (props) => {
  const event = props.event;
  const direction = event.id % 2 === 0 ? 'right' : 'left';
  const description =
    event.description.length > 140
      ? event.description.slice(0, 140) + '...'
      : event.description;

  return (
    <VerticalTimelineElement
      date={event.date}
      position={direction}
      icon={<Plus />}
      iconStyle={{ backgroundColor: 'red', color: 'white' }}
      className={styles.Event}
    >
      <h1>{event.title}</h1>
      <div>
        <p className={styles.Description}>{description}</p>
        <button
          className={styles.Button}
          onClick={() => props.selected(event.id)}
        >
          More Info...
        </button>
      </div>
    </VerticalTimelineElement>
  );
};

export default event;
