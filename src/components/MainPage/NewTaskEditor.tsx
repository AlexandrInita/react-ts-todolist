import React, {
  FC,
  useState,
} from 'react'
import { 
  Input,
  Button
} from 'antd'

type TProps = {
  addNewTask: (newTitle: string, newDescription: string) => void,
}

const NewTaskEditor: FC<TProps> = ({ addNewTask }: TProps ) => {

  const [newTitle, setNewTittle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const addTask = () => {
    addNewTask(newTitle, newDescription)
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