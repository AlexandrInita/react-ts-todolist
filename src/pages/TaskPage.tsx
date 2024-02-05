import React, { FC, 
  useState,
  useEffect,
} from 'react'
import { 
  Card, 
  Button,
} from 'antd'
import { TTask } from '../types/task'
import { 
  LeftOutlined,
} from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from '../hooks/localStorage/localStorage'

const TaskPage: FC = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useLocalStorage<TTask[]>([], 'tasks')
  const [title, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const { id } = useParams()

  useEffect(() => { 
    const task = tasks.find(el => el.id === Number(id))
  
    setTittle(() => task.title)
    setDescription(() => task.description)
  }, [tasks, id])

  return (
    <div>
      <Card 
        title={
        <div>
          <Button 
            type='text' 
            icon={<LeftOutlined />}
            onClick={() => { navigate('/tasks')}}
          >
            Все задачи
          </Button>
        </div>
      } 
        bordered={false} 
        style={{ width: '400px' }}
      >
        <p style={{ textAlign: 'start'}}><strong>Заголовок:</strong> { title }</p>  
        <p style={{ textAlign: 'start'}}><strong>Описание:</strong> { description } </p>
      </Card>
    </div>
  )
}

export default TaskPage