

import React from 'react';
import ReactDOM from 'react-dom';
import PcIndex from './components/PC/PcIndex';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';


import registerServiceWorker from './registerServiceWorker';


registerServiceWorker();


export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PcIndex />
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <div>
                        12312321312
                    </div>
                </MediaQuery>
            </div>
        );
    };
}
ReactDOM.render(
    <Root/>, document.getElementById('Root'));


