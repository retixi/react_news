/**
 * Created by renxi on 2017/6/11.
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import '../../css/mobile.css'

class PhoneNewsBlock extends Component {
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
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=100", myFetchOptions).
        then(response => response.json())
            .then(json => this.setState({news: json}));
    };
    render() {
        const newsList = this.state.news.length
            ?this.state.news.map((newsItem, index) => (
            <section key={index} className="m_article list-item special_section clearfix">
                    <div className="m_article_img">
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                    </div>
                    <div className="m_article_info">
                        <div className="m_article_title">
                            <span>{newsItem.title}</span>
                        </div>
                        <div className="m_article_desc clearfix">
                            <div className="m_article_desc_l">
                                <span className="m_article_channel">{newsItem.realtype}</span>
                                <span className="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </div>
            </section>
        ))
            : '没有加载到任何新闻';
        return (
            <div>
                        {newsList}
            </div>
        );
    };
}
export default PhoneNewsBlock;

