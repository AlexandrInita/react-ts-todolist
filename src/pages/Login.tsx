import React, { FC, useState } from 'react'
import { Input, Button, Flex } from 'antd'
import { useNavigate } from "react-router-dom"

const Login: FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const enter = () => {
    if (login && password) {
      navigate("/")
    }
  }

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLogin(e.target.value.toString())
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value.toString())
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Flex gap="middle" vertical style={{ width: '400px'}}>
        <h4>Вход</h4>
        <Input 
          placeholder="Логин"
          onChange={onChangeLogin}
        />
        <Input.Password 
          placeholder="Пароль"
          onChange={onChangePassword}
        />
        <Button type="primary" onClick={enter}>Авторизоваться</Button>
      </Flex>
    </div>
  );
}

export default Login