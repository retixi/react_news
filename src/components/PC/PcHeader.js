import React, { Component } from 'react';
import {Row,Col,Menu,Icon,Button,Modal,Tabs} from 'antd'
import 'antd/dist/antd.css'
import logo from '../../images/logo.png'
import '../../css/pc.css'
import PcRegistrationForm1 from './PcRegistrationForm1'
const TabPane=Tabs.TabPane





class Register extends Component {
    
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
              <Menu mode="horizontal">
                <Menu.Item key="top">
                  <Button type="primary" onClick={this.showModal}>注册／登录</Button>
                </Menu.Item>
              </Menu>
              <Modal
                  footer = {null}
                  title="用户中心"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
              >

                  <Tabs>
                    <TabPane tab="登录" key="login">
                    </TabPane>
                    <TabPane tab="注册" key="register">
                      <PcRegistrationForm1 hidemodal={this.handleCancel.bind(this)}/>
                    </TabPane>
                  </Tabs>

              </Modal>

            </div>

        );
    }
}


class PcHeader extends Component {
  render() {
    return (
        <header>
          <Row>
            <Col md={1}></Col>
            <Col md span={5}>
              <a href="/" className="logo">
                <img src={logo} alt="logo"/>
                <span>ReactNews</span>
              </a>
            </Col>
            <Col md={12}>
              <Menu mode="horizontal">
                <Menu.Item key="top">
                  <Icon type="to-top" />
                  <a href="http://www.imooc.com">慕课网</a>
                </Menu.Item>
                <Menu.Item key="shehui">
                  <Icon type="api" />
                  <a href="http://www.getbootstrap.com">bootstrap</a>
                </Menu.Item>
                <Menu.Item key="guonei">
                  <Icon type="apple" />
                  <a href="http://www.apple.com">苹果</a>
                </Menu.Item>
                <Menu.Item key="guoji">
                  <Icon type="windows" />
                  <a href="http://www.microsoft.com">微软</a>
                </Menu.Item>
                <Menu.Item key="yule">
                  <Icon type="android" />
                  <a href="http://www.google.com">谷歌</a>
                </Menu.Item>
                <Menu.Item key="keji">
                  <Icon type="github" />
                  <a href="http://www.github.com">github</a>
                </Menu.Item>
                <Menu.Item key="shishang">
                  <Icon type="dingding" />
                  <a href="https://ant.design/index-cn">蚂蚁</a>
                </Menu.Item>
              </Menu>
            </Col>
            <Col md="{5}">
              <Register/>
            </Col>
            <Col md={1}></Col>
          </Row>
        </header>



    );

  }
}

export default PcHeader;
