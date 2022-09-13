/**************************************************
 * Created by kaili on 2022/9/13 19:49.
 **************************************************/
import React, { useState, useRef } from 'react';
import { Button, List, Avatar, Divider } from 'antd-mobile';
import { Link } from 'react-router-dom';
import style from './Home.less';
import { Form, Input, Radio, Space } from 'antd-mobile';

function Header() {
  return (<div className={style.header + ' horizontal'}>
    <Avatar src={''} style={{ '--size': '48px' }} />
    <div className="nickName">炽羽</div>
    <div className="rank">校园新锐</div>
    <div className="score">总积分 <span>10</span></div>
  </div>);
}

function Score() {
  return <List>
    <List.Item>男单：2</List.Item>
    <List.Item>男双：4</List.Item>
    <List.Item>混双：4</List.Item>
  </List>;
}

function GameHistory() {
  return <List>
    <List.Item>【男双】 炽羽&乐洋（负） 彭仔&龙恺（胜） -1 </List.Item>
    <List.Item>【男双】 炽羽&乐洋（负） 彭仔&龙恺（胜） 0</List.Item>
    <List.Item>【无差别】 炽羽&肘肘（负） 赵天&知珞（胜） 0 </List.Item>
  </List>;
}

function Home() {
  return (<div className={`${style.home} `}>
    <Header />
    <Divider
      style={{
        color: '#ffffff',
        borderColor: '#ffffff',
        borderStyle: 'solid',
      }}
    >
      积分详情
    </Divider>
    <Score />
    <Divider
      style={{
        color: '#ffffff',
        borderColor: '#ffffff',
        borderStyle: 'solid',
      }}
    >
      历史战绩
    </Divider>
    <GameHistory />
    <div className="buttons horizontal">
      <Button size="middle" className="box">参赛</Button>
    </div>
  </div>);
}

export default Home;
