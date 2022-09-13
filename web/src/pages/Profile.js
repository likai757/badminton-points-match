/**************************************************
 * Created by kaili on 2022/9/13 19:49.
 **************************************************/
import React, { useState, useRef } from 'react';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import style from './Register.less';
import { Form, Input, Radio, Space } from 'antd-mobile';

function Profile() {
  const token = useRef('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const login = async () => {
    navigate('/home');
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

  return (<div className={`${style.register} vertical`}>
    <span className="title">完善信息</span>
    <Form layout="horizontal" mode="card">
      <Form.Item name="workid" label="工号">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="nickname" label="花名">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="level" label="自评等级">
        <Input placeholder="请输入 " />
      </Form.Item>
      <Form.Item name="gender" label="性别">
        <Radio.Group defaultValue="1">
          <Space direction="vertical">
            <Radio value="1">男</Radio>
            <Radio value="0">女</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </Form>
    <div className="buttons">
      <Button onClick={login} size="middle" className="box">完成</Button>
    </div>

  </div>);
}

export default Profile;
