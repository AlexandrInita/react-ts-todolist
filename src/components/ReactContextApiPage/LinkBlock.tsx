import React, {
  FC, 
  useContext,
} from 'react'
import UIContext from '../../contexts/UIContext'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const LinkBlock: FC = () => {
  const { label, size, color } = useContext(UIContext)

  return (
    <Card style={{ width: '400px' }}>
      <Link to={`/react-provider?size=${size}&color=${color.replace('#', '')}&label=${label}`}>Ссылка на эту страницу с параметрами</Link> 
    </Card>
  )
}

export default LinkBlock
