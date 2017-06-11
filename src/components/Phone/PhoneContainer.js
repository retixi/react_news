import React, { Component } from 'react';
import {Row,Col,Tabs,Card} from 'antd'
import 'antd/dist/antd.css'
import PhoneNewsBlock from './PhoneNewsBlock'
import PhoneCarouselBlock from './PhoneCarouselBlock'

import '../../css/pc.css'
const TabPane = Tabs.TabPane;




class PhoneContainer extends Component {
  render() {
      const imglist1=[
          {imgurl:'http://img1.gtimg.com/ninja/1/2017/06/ninja149628988312944.jpg',
              link:'http://news.qq.com/photon/tuhua.htm'
          },
          {imgurl:'http://img1.gtimg.com/ninja/1/2017/05/ninja149396915052039.jpg',
              link:'http://news.qq.com/original/tuhua/wushu.html'
          },
          {imgurl:'http://img1.gtimg.com/ninja/1/2017/04/ninja149265310017551.jpg',
              link:'http://news.qq.com/original/tuhua/spacedelivery.html'
          },
          {imgurl:'http://img1.gtimg.com/ninja/1/2017/04/ninja149181532223216.jpg',
              link:'http://news.qq.com/original/tuhua/Commute.html'
          }
      ]

      return (
          <div>
          <Row>
          <Col span={24}>

              <PhoneCarouselBlock imglist={imglist1} title="头条"/>

              <Tabs defaultActiveKey="1" className="tabs_news">
                  <TabPane tab="国际" key="1">
                      <PhoneNewsBlock type="guoji"/>
                  </TabPane>
                  <TabPane tab="国内" key="2">
                      <PhoneNewsBlock type="guonei"/>
                  </TabPane>
                  <TabPane tab="社会" key="3">
                      <PhoneNewsBlock type='shehui'/>
                  </TabPane>
                  <TabPane tab="娱乐" key="4">
                      <PhoneNewsBlock type='yule'/>
                  </TabPane>
                  <TabPane tab="体育" key="5">
                      <PhoneNewsBlock type='tiyu'/>
                  </TabPane>
                  <TabPane tab="科技" key="6">
                      <PhoneNewsBlock type='keji'/>
                  </TabPane>
              </Tabs>

          </Col>


          </Row>
          </div>





  );

  }
}

export default PhoneContainer;
