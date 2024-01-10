import React, { FC, 
  useState,
  useEffect,
} from 'react'
import { 
  Card, 
  List,
  Checkbox, 
  Popover, 
  Button,
  Input,
} from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

const MainPage: FC = () => {  
  type TTask = {
    id: number,
    title: string,
    description: string,
    completed: boolean,
  }

  const [tasks, setTasks] = useState<TTask[]>([])
  const [addState, setAddState] = useState(false)
  const [newTitle, setNewTittle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  useEffect(() => {
    setTasks([
      { id: 1, title: 'Проснуться', description: 'Очень важное дело и самое сложное дело', completed: false },
      { id: 2, title: 'Покушать', description: 'Самое важное дело', completed: false },
      { id: 3, title: 'Поспать', description: 'Лучшее дело сразу после покушать', completed: false },
    ])
  }, [])

  const changeCompleted = (e : CheckboxChangeEvent, index: number) => {
    setTasks((state) => { 
      return state.map((el, i) => i === index 
        ? { ...el, completed: e.target.checked } 
        : el)
    })
  }

  const changeNewTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewTittle(state => state = e.target.value)
  }

  const changeNewDescription = (e : React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(state => state = e.target.value)
  }

  const addNewTask = () => {
    setTasks([...tasks, { 
      id: Number(new Date().getTime()), 
      title: newTitle, 
      description: newDescription,
      completed: false,
    }])
    switchAddState()
  }

  const switchAddState = () => {
    setAddState(state => state = !state)
  }

  return (
    <div>
      <Card 
        title={
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span>Лист задач</span>
          <Button type="primary" onClick={switchAddState}>{addState ? 'Назад' : 'Добавить'}</Button>
        </div>
      } 
        bordered={false} 
        style={{ height: '400px', width: '400px' }}
      >
        {
        addState ?
          <div>
            <Input 
              placeholder="Титул" 
              value={newTitle} 
              onChange={changeNewTitle}
            />
            <Input 
              placeholder="Описание"
              value={newTitle}
              style={{ marginTop: '8px' }}
              onChange={changeNewDescription}
            />
            <Button 
              type="primary"
              style={{ marginTop: '8px' }}
              onClick={addNewTask}
            >
              Добавить
            </Button>
          </div>
          :
          <List
            itemLayout="horizontal"
            dataSource={tasks}
            renderItem={(item, index) => (
              <List.Item key={item.id} style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Popover title={item.description}>
                  {index + 1}. {item.title} ({item.completed.toString()})
                </Popover>

                <Checkbox 
                  checked={item.completed} 
                  onChange={(event: CheckboxChangeEvent) => { changeCompleted(event, index) }}
                />
              </List.Item>
            )}
          />
        }
      </Card>
    </div>
  )
}

export default MainPage