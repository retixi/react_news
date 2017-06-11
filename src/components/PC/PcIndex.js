import React from 'react';
import PcHeader from './PcHeader';
import PcContainer from './PcContainer';
import PcFooter from './PcFooter';

import {Row} from 'antd'

export default class PcIndex extends React.Component {
    render() {
        return (
            <div>
                <PcHeader />
                    <PcContainer />
                    <PcFooter/>
            </div>
        );
    };
}
