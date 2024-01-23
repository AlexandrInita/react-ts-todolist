import React, {
  FC
} from 'react'
import { 
  List,
  Popover,
  Checkbox
} from 'antd'
import { TTask } from '../../types/task'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

type TProps = {
  tasks: TTask[], 
  changeCompleted: (e : CheckboxChangeEvent, index: number) => void,
}

const TaskList: FC<TProps> = (
  {tasks, changeCompleted} : TProps) => {
  return (
     <List
        style={{ paddingRight: '8px', height: 300, overflow: 'auto' }}
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(item, index) => (
          <List.Item 
            key={item.id} 
            style={{ display: 'flex', justifyContent: 'space-between', background: item.completed ? '#1677ff' : '', 
                     padding: '4px 16px', marginTop: '8px', color: item.completed ? 'white' : 'black' }}
          >
            <Popover title={item.description}>
              {index + 1}. {item.title}
            </Popover>

            <Checkbox 
              checked={item.completed} 
              onChange={(event: CheckboxChangeEvent) => { changeCompleted(event, index) }}
            />
          </List.Item>
        )}
    />
  )
}

export default TaskList