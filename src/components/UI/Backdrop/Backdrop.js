import React from 'react';
import classes from './Backdrop.module.css';

/**
 * A reusable darkend backdrop component
 *
 * Component borrowed from/inspired by the backdrop component from this great course my Maximilian Schwarzmüller
 * https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview
 */
const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
