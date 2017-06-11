import React, { Component } from 'react';
import Logo from '../../images/logo.png'
import '../../css/mobile.css'


class PhoneHeader extends Component {
  render() {
    return (
        <div id="mobileheader">
            <header>
            <img src={Logo} alt="logo"/>
            <span>React News</span>
            </header>
        </div>

    );

  }
}

export default PhoneHeader;
