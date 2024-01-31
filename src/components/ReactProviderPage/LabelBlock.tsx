import React, {
  FC, useContext
} from 'react'
import UIContext from '../../contexts/UIContext'
import { Card, Input } from 'antd'

const TopBlock: FC = () => {
  const { label, dispatch } = useContext(UIContext)

  return (
    <Card 
      className='mb-2'
      style={{ width: '400px' }}
    >
      <Input value={label} onChange={(e) => dispatch({ type: 'setLabel', payload: e.target.value })} />
    </Card>
  )
}

export default TopBlock
