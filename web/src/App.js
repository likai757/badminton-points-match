import React, { useRef, useState } from 'react';
import { Button } from 'antd-mobile';
import { Link, Routes, Route } from 'react-router-dom';
import styles from './App.less';

function App() {
  const token = useRef('');
  const [data, setData] = useState([]);

  const login = async () => {
    const userName = 'root';
    const passwd = 'admin_123';
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        passwd
      })
    });
    response.json().then(res => {
      token.current = res.token;
    });
  };

  const getData = async () => {
    if (!token.current) {
      alert('请先登录！');
    } else {
      const response = await fetch('/api/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token.current
        },
      });
      response.json().then(res => {
        if (res.errCode === 0) {
          setData(res.data);
        }
      });
    }
  };

  return (<div className={styles.App}>
    <Button onClick={login}>登录</Button>
    <Button onClick={getData}>获取数据</Button>
    <Link to="/login">Login</Link>

    {data.length > 0 && <ul>
      {data.map(res => <li key={res.id}>
        {res.userName}
      </li>)}
    </ul>}
  </div>);
}

export default App;
