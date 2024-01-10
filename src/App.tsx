import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout style={{  height: '100vh'}}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
      </Header>

      <Content style={{ display: 'flex', alignItems: 'center', justifyContent:'center', padding: '0 48px' }}>
        <AppRouter />
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>
        Todolist ©{new Date().getFullYear()} Created by Inita
      </Footer>
    </Layout>
  )
}

export default App
