/**************************************************
 * Created by kaili on 2022/9/13 19:49.
 **************************************************/
import React, { useState, useRef } from 'react';
import { Button, List, Avatar, Divider } from 'antd-mobile';
import { Link, useNavigate } from 'react-router-dom';
import style from './Home.less';

function Header() {
  let [score, setScore] = useState(0);
  setTimeout(() => setScore(10), 50);
  return (<div className={style.header + ' horizontal-left'}>
    <Avatar src={''} style={{ '--size': '48px' }} />
    <div className="nickName">炽羽</div>
    <div className="rank">校园新锐</div>
    <div className="score">总积分 10</div>
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
    <List.Item>【无差】 炽羽&肘肘（负） 赵天&知珞（胜） 0 </List.Item>
  </List>;
}

function Home() {
  const navigate = useNavigate();

  const handleToPlay = () => {navigate('/team/' + 1);};
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
      <Button onClick={handleToPlay} size="middle" className="box">参赛</Button>
    </div>
  </div>);
}

export default Home;
