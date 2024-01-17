import React, {
  FC,
  useState,
} from 'react'
import { 
  Input,
  Button
} from 'antd'
import { TTask } from '../../types/task'

type TProps = {
  addNewTask: (newTask: TTask) => void,
}

const NewTaskEditor: FC<TProps> = ({ addNewTask }: TProps ) => {

  const [newTitle, setNewTittle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const addTask = () => {
    addNewTask({
      id: Number(new Date().getTime()), 
      title: newTitle, 
      description: newDescription,
      completed: false,
    })
    setNewTittle('')
    setNewDescription('')
  }

  return (
    <>
      <Input 
        placeholder="Титул" 
        value={newTitle} 
        onChange={(e) => setNewTittle(e.target.value)}
      />
      <Input 
        placeholder="Описание"
        value={newDescription}
        style={{ marginTop: '8px' }}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <Button 
        type="primary"
        style={{ marginTop: '8px' }}
        onClick={addTask}
      >
        Добавить
      </Button>
    </>
  )
}

export default NewTaskEditor