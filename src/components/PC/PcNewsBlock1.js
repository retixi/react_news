import React, { Component } from 'react';
import {Card} from 'antd';
import 'antd/dist/antd.css'
import '../../css/pc.css'

class PcNewsBlock1 extends Component {
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
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=22", myFetchOptions).
        then(response => response.json())
        .then(json => this.setState({news: json}));
    };
    render() {
        const newsList = this.state.news.length
            ?this.state.news.map((newsItem, index) => (
            <li >
                <a href={newsItem.url}>{newsItem.title}</a>
            </li>
        ))
            : '没有加载到任何新闻';
        return (
            <div class="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    };
  }


export default PcNewsBlock1;
