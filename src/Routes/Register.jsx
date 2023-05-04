import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Register = () => {
    const navi = useNavigate();
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
      const {username,password}=user
      if(username && password){
        axios.post("http://localhost:9002/register",user)
        .then(res=>console.log(res.data))
      }
      
    }
    // console.log(user)
    return(
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input name="username" value={user.username} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password name = "password" value={user.password} onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Submit
      </Button>
      <Button type="primary" htmlType="submit" onClick={()=>navi("/login")}>
        Login
      </Button>

    </Form.Item>
  </Form>
    )
}
export default Register;