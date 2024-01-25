import React, { FC, 
  useState,
  useEffect,
} from 'react'
import { 
  Card, 
  Button,
} from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import NewTaskEditor from '../components/MainPage/NewTaskEditor'
import { TTask } from '../types/task'
import TaskList from '../components/MainPage/TaskList'
import useLocalStorage from '../hooks/localStorage/localStorage'
import { 
  LeftOutlined,
  PlusOutlined,
} from '@ant-design/icons'

const MainPage: FC = () => {  
  const [tasks, setTasks] = useLocalStorage<TTask[]>([], 'tasks')
  const [isAddState, setIsAddState] = useState(false)

  const completedTaskCount = tasks.reduce((ac: number, cur: TTask) => { return ac + Number(cur.completed) }, 0)
  const completedTaskPersent = Math.round(completedTaskCount / tasks.length * 100)

  useEffect(() => {
    if (tasks.length === 0 ) {
      setTasks([
        { id: 1, title: 'Проснуться', description: 'Очень важное дело и самое сложное дело', completed: false },
        { id: 2, title: 'Покушать', description: 'Самое важное дело', completed: false },
        { id: 3, title: 'Поспать', description: 'Лучшее дело сразу после покушать', completed: false },
        { id: 4, title: 'Поспать 2', description: 'Лучшее дело сразу после покушать', completed: false },
        { id: 5, title: 'Поспать 3', description: 'Лучшее дело сразу после покушать', completed: false },
        { id: 6, title: 'Поспать 4', description: 'Лучшее дело сразу после покушать', completed: false },
        { id: 7, title: 'Поспать 5', description: 'Лучшее дело сразу после покушать', completed: false },
        { id: 8, title: 'Поспать 6', description: 'Лучшее дело сразу после покушать', completed: false },
      ])
    }
  }, [])

  const changeCompleted = (e : CheckboxChangeEvent, index: number) => {
    setTasks((state: TTask[]) => { 
      return state.map((el: TTask, i: number) => i === index 
        ? { ...el, completed: e.target.checked } 
        : el)
    })
  }

  const addNewTask = (newTask: TTask) => {
    setTasks([...tasks, newTask])
    switchIsAddState()
  }

  const switchIsAddState = () => {
    setIsAddState(state => state = !state)
  }

  return (
    <div>
      <Card 
        title={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{ 'Лист задач ' } 
            <span style={{ background: completedTaskPersent !== 0 ? '#76ff03' : '', borderRadius: '8px', padding: '4px 8px' }}>
              {completedTaskPersent}%
              </span>
          </span>
          <Button 
            type={isAddState ? 'text' : 'primary'} 
            icon={isAddState ? <LeftOutlined /> : <PlusOutlined />}
            onClick={switchIsAddState}
          >
           { isAddState ? 'Назад' : 'Добавить' }
          </Button>
        </div>
      } 
        bordered={false} 
        style={{ width: '400px' }}
      >
        {
          isAddState ?
            <NewTaskEditor addNewTask={addNewTask} />
            :
            <TaskList 
              tasks={tasks}
              changeCompleted={changeCompleted}
            />
        }
      </Card>
    </div>
  )
}

export default MainPage