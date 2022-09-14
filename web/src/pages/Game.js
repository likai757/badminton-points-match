/**************************************************
 * Created by kaili on 2022/9/13 19:49.
 **************************************************/
import React, { useState, useRef } from 'react';
import { Button, List, Checkbox, Space, Picker } from 'antd-mobile';
import { Link, useNavigate } from 'react-router-dom';
import style from './Game.less';

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
  let tempStatus = [{
    name: '知珞',
    id: 1
  }, {
    name: '赵天',
    id: 2
  }, {
    name: '炽羽',
    id: 3
  }, {
    name: '乐洋',
    id: 4
  }];

  const navigate = useNavigate();
  const [status, setStatus] = useState(tempStatus);
  const [visible, setVisible] = useState(false);
  const [victor, setVictor] = useState(['待确定']);
  const [checkValues, setCheckValues] = useState([]);
  const handleToHome = () => {navigate('/home');};
  const handleSelectVictor = () => {setVisible(true);};

  return (<div className={`${style.game} vertical`}>
    <span className="title">对战PK</span>
    <div className="horizontal">
      <div className="card vertical">
        <span className="member"> 知珞</span>
        <span className="member">赵天</span>
        <span>3号队伍</span>
      </div>
      <div className="title">VS</div>
      <div className="card vertical">
        <span className="member">乐洋</span>
        <span className="member">炽羽</span>
        <span>1号队伍</span>
      </div>
    </div>
    <div className="desc vertical-left">
      <div className="text">日期：2022-09-14</div>
      <div className="text">胜方：<span style={{
        color: '#ff0000',
        fontWeight: 800,
        background: '#fff',
        padding: '5px'
      }}>{victor}</span></div>
      <div className="text">状态：待确认 | 待提交</div>
    </div>
    <div className="status vertical-left">
      <Checkbox.Group value={checkValues} onChange={v => {setCheckValues(v);}}>
        <Space direction="horizontal">
          {status.map(item => (<Checkbox key={item.id} value={item.id}>
            {item.name}
          </Checkbox>))}
        </Space>
      </Checkbox.Group>
    </div>
    <div className="buttons vertical">
      <Button onClick={handleSelectVictor} style={{ marginBottom: 10 }} size="middle" className="box">选择胜方</Button>
      <Button onClick={handleToHome} size="middle" className="box">确认结果</Button>
    </div>
    <Picker
      columns={[['知珞&赵天', '炽羽&乐洋']]}
      visible={visible}
      onClose={() => {
        setVisible(false);
      }}
      value={victor}
      onConfirm={v => {
        setVictor(v);
      }}
    />
  </div>);
}

export default Home;
