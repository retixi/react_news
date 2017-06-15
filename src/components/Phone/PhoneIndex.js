import React, { Component } from 'react';
import PhoneHeader from './PhoneHeader';
import PhoneFooter from './PhoneFooter'
import PhoneContainer from './PhoneContainer'


class PhoneIndex extends Component {
  render() {
      const wellstyles={maxWidth:400,margin:'0 auto'}
    return (
        <div style={wellstyles}>
            <PhoneHeader/>
            <PhoneContainer/>
            <PhoneFooter/>
        </div>

    );

  }
}

export default PhoneIndex;
