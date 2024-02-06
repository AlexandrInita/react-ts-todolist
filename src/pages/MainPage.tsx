import { 
  FC,
} from 'react'
import { 
  Button,
  Card, 
} from 'antd'
import { Link } from 'react-router-dom'

const MainPage: FC = () => {  
  const links = [
    { link: '/tasks', name: 'Лист задач' },
    { link: '/react-provider', name: 'React ContextApi' },
    { link: '/memoization', name: 'Мемоизация' },
    { link: '/', name: 'О проекте' },
  ]

  return (
    <Card 
      title={'Добро пожаловать'} 
      bordered={false} 
      style={{ width: '400px' }}
    >
      {
        links.map(link => 
          <Link to={ link.link } key={link.name}>
            <Button className="mt-2 w-full">{ link.name }</Button>
          </Link>
        )
      }
    </Card>
  )
}

export default MainPage