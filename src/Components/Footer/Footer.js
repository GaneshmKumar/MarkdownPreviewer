import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="copyright">
          Copyright ©
          <a href="https://ganeshmkumar.github.io" target="_blank" rel="noopener noreferrer">
            Ganesh Kumar M 2018
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
