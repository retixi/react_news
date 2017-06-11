import React, { Component } from 'react';
import {Row,Col} from 'antd'
import 'antd/dist/antd.css'
import '../../css/pc.css'

class PcFooter extends Component {
  render() {
    return (
        <div className="footer">
          <Row>
            <Col span={2}></Col>
              &copy;&nbsp;All Right Reserved
            <Col span={2}></Col>
          </Row>
        </div>

    );

  }
}

export default PcFooter;
