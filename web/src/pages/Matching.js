/**************************************************
 * Created by kaili on 2022/9/13 19:49.
 **************************************************/
import React, { useState, useRef, Fragment } from 'react';
import { Button, Picker, List, Image } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import style from './Matching.less';

let users = [{
  id: '1',
  avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name: '肘肘',
  description: '男单',
}, {
  id: '2',
  avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  name: '彭仔',
  description: '男双',
  id1: '4',
  avatar1: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name1: '乐洋',
  description1: 'Animi eius expedita, explicabo',
}, {
  id: '2',
  avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  name: '知珞',
  description: '女双',
  id1: '4',
  avatar1: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name1: '赵天',
  description1: 'Animi eius expedita, explicabo',
}, {
  id: '4',
  avatar: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name: '银丸',
  description: '男单',
},];

function Matching() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(['全部']);
  const navigate = useNavigate();

  const handleChallenge = (teamBId) => {
    let gameType = 2;
    let teamAId = 1;
    navigate(`/game/${gameType}/${teamAId}/${teamBId}`);
  };

  return (<div className={`${style.matching} `}>
    <Picker
      columns={[['全部', '男双', '女双', '混双']]}
      visible={visible}
      onClose={() => {
        setVisible(false);
      }}
      value={value}
      onConfirm={v => {
        setValue(v);
      }}
    />
    <div className="header horizontal-left">
      <span className="title">选择挑战队伍：{value}</span>
      <Button onClick={() => {setVisible(true);}} size="middle" className="box">筛选</Button>
    </div>
    <List header="挑战队伍列表">
      {users.map(user => (<List.Item
        key={user.name}
        prefix={<div style={{
          position: 'relative',
          width: 80,
          height: 40
        }}>
          <Image
            src={user.avatar}
            style={{
              borderRadius: 20,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
            fit="cover"
            width={40}
            height={40}
          />
          {user.avatar1 && <Image
            src={user.avatar1}
            style={{
              borderRadius: 20,
              position: 'absolute',
              top: 0,
              left: 30
            }}
            fit="cover"
            width={40}
            height={40}
          />}
        </div>}
        description={user.description}
      >
        {`${user.name}${user.name1 ? '&' + user.name1 : ''}`}
        <Button className={'challenge-btn'} onClick={handleChallenge.bind(this, user.id)}>挑战</Button>
      </List.Item>))}
    </List>
  </div>);
}

export default Matching;
