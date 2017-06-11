import React, { Component } from 'react';
import PhoneHeader from './PhoneHeader';
import PhoneFooter from './PhoneFooter'
import PhoneContainer from './PhoneContainer'


class PhoneIndex extends Component {
  render() {
    return (
        <div>
            <PhoneHeader/>
            <PhoneContainer/>
            <PhoneFooter/>
        </div>

    );

  }
}

export default PhoneIndex;
