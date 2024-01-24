import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { 
  Input,
  Button,
  Alert,
  InputRef,
} from 'antd'
import { TTask } from '../../types/task'
import { 
  PlusOutlined,
} from '@ant-design/icons'
import { boredTaskApi } from '../../api'

type TProps = {
  addNewTask: (newTask: TTask) => void,
}

const NewTaskEditor: FC<TProps> = ({ addNewTask }: TProps ) => {

  const [newTitle, setNewTittle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [randomTaskDescription, setRandomTaskDescription] = useState('')
  const firstInput = useRef<InputRef>(null) 

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

  function copyRandomTask() {
    setNewDescription(randomTaskDescription)
  }

  async function getRandomTask() {
    try {
      // const data = await boredTaskApi.getRandomTask()
      setIsLoading(state => state = true)
      const data = {
        accessibility:0,
        activity:"Learn Morse code",
        key:"3646173",
        link:"https://en.wikipedia.org/wiki/Morse_code",
        participants: 1,
        price: 0,
        type: "education",
      } 
      setRandomTaskDescription(data.activity)
    } catch(e) {
      console.log(e)
    } finally {
      setIsLoading(state => state = false)
    }
  }

  useEffect(() => {
    if (firstInput.current) firstInput.current.focus()
    getRandomTask()
  }, [])

  return (
    <>
    <Alert
        message="Предлагаю добавить"
        description={randomTaskDescription}
        type="info"
        showIcon
        action={
          <Button 
            type="text" 
            icon={<PlusOutlined />}
            onClick={copyRandomTask} 
          />
        }
      />
      <Input 
        ref={firstInput}
        placeholder="Титул" 
        value={newTitle}
        style={{ marginTop: '8px' }} 
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
        icon={<PlusOutlined />}
        style={{ marginTop: '8px' }}
        onClick={addTask}
      >
        Добавить
      </Button>
    </>
  )
}

export default NewTaskEditor