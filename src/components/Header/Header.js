import React, { Component } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

class Header extends Component {
  state = {
    collapsed: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.collapsed !== nextState.collapsed;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    const scrollDistance =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollDistance > 100) {
      this.setState({ collapsed: true });
    } else {
      this.setState({ collapsed: false });
    }
  };

  render() {
    let elemStyles = [styles.Header, styles.NotCollapsed];
    if (this.state.collapsed) {
      elemStyles = [styles.Header, styles.Collapsed];
    }

    return (
      <div className={elemStyles.join(' ')}>
        <nav id="navbar">
          <div className={styles.LogoWrapper}>
            <Logo className={styles.Logo} />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
