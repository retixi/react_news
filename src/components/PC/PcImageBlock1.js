import React from 'react';
import {Card,Row,Col} from 'antd';
import 'antd/dist/antd.css'
export default class PcImageBlock1 extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    };
    render() {
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };
        const styeH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
            <Col md={3}>

            <div key={index} class="imageblock">
                    <div class="custom-image">
                        <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                    </div>
                    <div class="custom-card">
                        <h3 style={styeH3}>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>

            </div>
            </Col>
        ))
            : '没有加载到任何新闻';
        return (
            <div>
                <Row>
                <Card title={this.props.cartTitle} bordered={true} style={{
                    width: this.props.width
                }}>
                    {newsList}
                </Card>
                </Row>
            </div>
        );
    };
}


