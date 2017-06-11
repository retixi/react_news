import React, { Component } from 'react';
import {Carousel,Card} from 'antd';
import 'antd/dist/antd.css'
import '../../css/pc.css'

class PcNewsBlock1 extends Component {
    render() {
        return (
            <div className="carousel">

                <Card><h2>{this.props.title}</h2></Card>
                <Carousel autoplay>
                    <a href={this.props.imglist[0].link}><img src={this.props.imglist[0].imgurl} alt="true"/></a>
                    <a href={this.props.imglist[1].link}><img src={this.props.imglist[1].imgurl} alt="true"/></a>
                    <a href={this.props.imglist[2].link}><img src={this.props.imglist[2].imgurl} alt="true"/></a>
                    <a href={this.props.imglist[3].link}><img src={this.props.imglist[3].imgurl} alt="true"/></a>

                </Carousel>

            </div>

        );
    };
  }


export default PcNewsBlock1;
