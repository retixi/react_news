import React, { Component } from 'react';
import {Row,Col,Tabs,Card} from 'antd'
import 'antd/dist/antd.css'
import PcNewsBlock1 from './PcNewsBlock1'
import PcImageBlock1 from './PcImageBlock1'
import PcCarouselBlock1 from './PcCarouselBlock1'
import PcProduct1 from './PcProduct1'
import '../../css/pc.css'
const TabPane = Tabs.TabPane;




class PcContainer extends Component {
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
      const imglist2=[
          {imgurl:'http://img6.cache.netease.com/photo/0001/2017-06-10/CMJBILJN00AP0001.jpg',
              link:'http://news.163.com/photoview/00AP0001/2260097.html?from=ph_ss#p=CMJBILJN00AP0001'
          },
          {imgurl:'http://img6.cache.netease.com/photo/0001/2017-06-10/CMISKF9700AP0001.jpg',
              link:'http://news.163.com/photoview/00AP0001/2260070.html?from=ph_ss#p=CMISKF9700AP0001'
          },
          {imgurl:'http://img6.cache.netease.com/photo/0001/2017-06-10/CMJ0P5G600AP0001.jpg',
              link:'http://news.163.com/photoview/00AP0001/2260074.html?from=ph_ss#p=CMJ0P5G600AP0001'
          },
          {imgurl:'http://img3.cache.netease.com/photo/0001/2017-06-10/CMJ83D6300AP0001.jpg',
              link:'http://news.163.com/photoview/00AP0001/2260089.html?from=ph_ss#p=CMJ83D6300AP0001'
          }
      ]

      return (
          <div>
          <Row>
          <Col md={2}>
          </Col>

          <Col md={7} className="container">
              <PcCarouselBlock1 imglist={imglist1} title="头条"/>
              <PcCarouselBlock1 imglist={imglist2} title="国内"/>

          </Col>
          <Col md={8} className="container">


              <Tabs defaultActiveKey="1" className="tabs_news">
                  <TabPane tab="国际" key="1">
                      <PcNewsBlock1 type="guoji"/>
                  </TabPane>
                  <TabPane tab="国内" key="2">
                      <PcNewsBlock1 type="guonei"/>
                  </TabPane>
                  <TabPane tab="社会" key="3">
                      <PcNewsBlock1 type='shehui'/>
                  </TabPane>
              </Tabs>

          </Col>
          <Col md={5} className="container">
              <PcProduct1/>
          </Col>


              <Col md={2}></Col>
          </Row>
          <Row>
          <Col md={2}></Col>
          <Col md={20}>
          <PcImageBlock1 count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
          <PcImageBlock1 count={8} type="guoji" width="100%" cartTitle="国际新闻" imageWidth="132px"/>

          </Col>
          <Col md={2}></Col>

          </Row>
          </div>




  );

  }
}

export default PcContainer;
