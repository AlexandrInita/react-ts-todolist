import React, {
  FC
} from 'react'
import { 
  Input,
  Button
} from 'antd'

type TProps = {
  newTitle: string, 
  newDescription: string,
  changeNewTitle: (e : React.ChangeEvent<HTMLInputElement>) => void,
  changeNewDescription: (e : React.ChangeEvent<HTMLInputElement>) => void,
  addNewTask: () => void,
}

const NewTaskEditor: FC<TProps> = (
  {newTitle, newDescription, changeNewTitle, changeNewDescription, addNewTask} : TProps) => {
  return (
    <>
      <Input 
        placeholder="Титул" 
        value={newTitle} 
        onChange={changeNewTitle}
      />
      <Input 
        placeholder="Описание"
        value={newDescription}
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
    </>
  )
}

export default NewTaskEditor