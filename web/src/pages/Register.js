/**************************************************
 * Created by kaili on 2022/9/13 19:49.
 **************************************************/
import React, { useState, useRef } from 'react';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import style from './Register.less';
import { Form, Input } from 'antd-mobile';

function Login() {
  const token = useRef('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const login = async () => {
    navigate('/profile');
  };

  return (<div className={`${style.register} vertical`}>
    <span className="title">账号注册</span>
    <Form layout="horizontal" mode="card">
      <Form.Item label="手机号">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="密码">
        <Input type="password" placeholder="请输入" />
      </Form.Item>
      <Form.Item label="确认密码">
        <Input type="password" placeholder="请输入" />
      </Form.Item>
    </Form>
    <div className="buttons">
      <Button onClick={login} size="middle" className="box">下一步</Button>
    </div>

  </div>);
}

export default Login;
