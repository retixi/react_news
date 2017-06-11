import React, { Component } from 'react';
import {Row,Col} from 'antd'
import 'antd/dist/antd.css'
import '../../css/pc.css'

class PcFooter extends Component {
  render() {
    return (
        <div className="footer">
          <Row>
            <Col md={2}></Col>
              <footer md={20}>
                  &copy;&nbsp;All Right Reserved

              </footer>
            <Col md={2}></Col>
          </Row>
        </div>

    );

  }
}

export default PcFooter;
