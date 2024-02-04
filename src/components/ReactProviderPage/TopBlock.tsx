import React, {
  FC, 
  useContext,
} from 'react'
import UIContext from '../../contexts/UIContext'
import { 
  Card, 
  Button,
} from 'antd'
import { CloseOutlined, LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const TopBlock: FC = () => {
  const { dispatch } = useContext(UIContext)
  const navigate = useNavigate()

  return (
    <Card 
      className='mb-2'
      style={{ width: '400px' }}
    >
      <div className='d-flex justify-space-between'>
        <Button 
          type="text" 
          icon={<LeftOutlined />}
          onClick={() => { navigate('/') }}
        >
          Назад
        </Button>

        <Button 
          danger
          icon={<CloseOutlined />}
          onClick={() => { dispatch({type: 'reset'}) }}
        >
          Сбросить настройки
        </Button>
      </div>
    </Card>
  )
}

export default TopBlock
