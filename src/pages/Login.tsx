import React, { FC, useState } from 'react'
import { Input, Button, Flex } from 'antd'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setName, setFakeUserName } from '../store/user'

const Login: FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const enter = () => {
    if (login && password) {
      dispatch(setName(login))
      navigate("/")
    }
  }

  const randomEnter = async() => {
    try {
      await dispatch(setFakeUserName())
      navigate("/")
    } catch(e) {
      console.log(e);
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
        <Button type="text" onClick={randomEnter}>Зайти под случайным</Button>
      </Flex>
    </div>
  );
}

export default Login