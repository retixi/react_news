import React from 'react';
import ReactDOM from 'react-dom';
import PcHeader from './components/PC/PcHeader';
import PcFooter from './components/PC/PcFooter';
import PcContainer from './components/PC/PcContainer'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PcHeader />, document.getElementById('PcHeader'));
ReactDOM.render(<PcFooter />, document.getElementById('PcFooter'));
ReactDOM.render(<PcContainer />, document.getElementById('PcContainer'));


registerServiceWorker();
