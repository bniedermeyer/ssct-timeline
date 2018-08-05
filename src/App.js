import React, { Component } from 'react';
import Timeline from './components/Timeline/Timeline';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Modal from './components/UI/Modal/Modal';
import ExpandedEvent from './components/Timeline/ExpandedEvent/ExpandedEvent';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

class App extends Component {
  state = {
    events: [
      {
        id: 0,
        date: 'July 2012',
        title: 'Thing 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id venenatis urna. Cras imperdiet quis ipsum nec iaculis. Integer convallis suscipit ante, et facilisis tortor viverra quis. Maecenas in mauris a est posuere rhoncus. Praesent convallis arcu urna, non sodales diam aliquam non. Morbi bibendum neque id congue commodo. Aliquam dictum mattis massa, quis eleifend nisi iaculis eu. Suspendisse non orci quis risus pulvinar fermentum at ac lectus.'
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
      },
      {
        id: 3,
        date: 'September 2012',
        title: 'Thing 4',
        description: 'This is a description'
      },
      {
        id: 4,
        date: 'September 2012',
        title: 'Thing 5',
        description: 'This is a description'
      }
    ],
    selectedEvent: null,
    eventSelected: false
  };

  handleEventSelect = (id) => {
    const selectedEvent = this.state.events.find((event) => {
      return event.id === id;
    });
    this.setState({ selectedEvent, eventSelected: true });
  };

  handleEventClose = () => {
    this.setState({ selectedEvent: null, eventSelected: false });
  };

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Intro />
        <Modal
          show={this.state.eventSelected}
          modalClicked={this.handleEventClose}
        >
          <ExpandedEvent event={this.state.selectedEvent} />
        </Modal>
        <Timeline
          events={this.state.events}
          handleEventSelect={this.handleEventSelect}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
