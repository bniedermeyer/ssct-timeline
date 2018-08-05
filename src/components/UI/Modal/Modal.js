import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

/**
 * A reusable Modal component
 *
 * Component borrowed from/inspired by the modal component from this great course my Maximilian Schwarzmüller
 * https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview
 */
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClicked} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={styles.Modal}
        >
          <div className={styles.CloseModal} onClick={this.props.modalClicked}>
            X
          </div>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
