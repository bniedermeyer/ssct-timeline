import React, { Component } from 'react';
import styles from './Footer.module.css';
import Modal from '../UI/Modal/Modal';

class Footer extends Component {
  state = {
    displayCredits: false
  };

  handleDisplayCredits = () => {
    this.setState({ displayCredits: true });
  };

  handleCloseCredits = () => {
    this.setState({ displayCredits: false });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.state.displayCredits}
          modalClicked={this.handleCloseCredits}
        >
          <h3>This site was created using the following libraries:</h3>
          <ul>
            <li>
              <a href="https://github.com/facebook/react">React</a>
            </li>
            <li>
              <a href="https://github.com/stephane-monnot/react-vertical-timeline">
                React Vertical Timeline
              </a>
            </li>
            <li>
              <a href="https://github.com/FortAwesome/react-fontawesome">
                react-fontawesome
              </a>
            </li>
          </ul>
        </Modal>
        <footer className={styles.Footer}>
          <p>
            Built by <a href="https://brenden.fyi">Brenden Niedermeyer</a>
          </p>

          <ul>
            <li>
              <a href="http://www.tacomaswiss.com">SSCT Home</a>
            </li>
            <li>
              <a href="https://www.tacomaswiss.com/membership/">
                Become a member
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.handleDisplayCredits}
                aria-label={'display project credits'}
              >
                Credits
              </a>
            </li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
