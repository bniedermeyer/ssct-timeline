import React, { Component } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Timeline.css';
import Event from './Event/Event';

class Timeline extends Component {
  state = {
    events: [
      {
        id: 0,
        date: 'July 2012',
        title: 'Thing 1',
        description: 'This is a description'
      },
      {
        id: 1,
        date: 'August 2012',
        title: 'Thing 2',
        description: 'This is a description'
      },
      {
        id: 2,
        date: 'September 2012',
        title: 'Thing 3',
        description: 'This is a description'
      }
    ]
  };

  render() {
    const events = this.state.events.map((event) => {
      return <Event key={event.id} event={event} />;
    });

    return (
      <div className={styles.Timeline}>
        <VerticalTimeline>{events}</VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;
