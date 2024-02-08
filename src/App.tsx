import './App.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { 
  Layout,
  Dropdown,
  Space,
  MenuProps,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { logout } from './store/user'

const { Header, Content, Footer } = Layout

function App() {
  const userName = useSelector((store: any) => store.user.userName)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: userName,
      disabled: true,
    },
    {
      key: '2',
      label: 'Выход',
      onClick:() => { 
        dispatch(logout())
        navigate('/login')
      },
    }
  ]

  const getCurrent = useCallback(() => {
    return userName
  }, [userName])

  useEffect(() => {
    if (location.pathname !== '/login' && !getCurrent()) navigate('/login')
  }, [location])

  return (
    <Layout color='#ff00ff' style={{  height: '100vh'}}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {
          userName &&
          <>
            <Link to="/">Главная</Link>

            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <UserOutlined />
                  { userName }
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </>
        }
      </Header>

      <Content style={{ display: 'flex', alignItems: 'center', justifyContent:'center', padding: '0 48px' }}>
        <AppRouter />
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>
        Todolist ©{new Date().getFullYear()} Создано Inita
      </Footer>
    </Layout>
  )
}

export default App
