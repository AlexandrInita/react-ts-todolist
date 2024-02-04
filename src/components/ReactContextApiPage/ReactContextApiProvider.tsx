import { 
  FC, 
  useEffect, 
  useReducer, 
} from 'react'
import { 
  Card, 
} from 'antd'
import UIContext from '../../contexts/UIContext'
import { useSearchParams } from 'react-router-dom'

type sizeType = 'small' | 'middle' | 'large'

interface UIObjectType {
  label: string;
  size:  sizeType ,
  color: string,
}

const initState: UIObjectType = {
  label: 'hello',
  size: 'middle',
  color: '#000000'
}

function reducer(state: UIObjectType, action: { type: string, payload: string | sizeType }) {  
  switch (action.type) {
    case 'setLabel':
      return {
        ...state,
        label: action.payload
      } 
    case 'setSize':
      return {
        ...state,
        size: action.payload
      }   
    case 'setColor':
      return {
        ...state,
        color: action.payload
      } 
    case 'reset':
      return {
        ...initState
      } 
    default: 
      return state
  }
}

const ReactContextApiProvider: FC = ({children}) => {  
  const [searchParams, setSeachParams] = useSearchParams()
  const sizeParam = searchParams.get('size')
  const colorParam = searchParams.get('color')
  const labelParam = searchParams.get('label')

  const initObj = { ...initState }

  if (sizeParam && colorParam && labelParam) {
    initObj.size = sizeParam as sizeType
    initObj.color = `#${colorParam}`
    initObj.label = labelParam
  }

  const [{label, size, color}, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    setSeachParams({ size, color: color.replace('#', ''), label })
  }, [label, size, color])

  return (
    <UIContext.Provider value={{ 
      label, 
      size, 
      color, 
      dispatch
    }}>
      <Card className='d-flex flex-column'>
        {children}
      </Card>
    </UIContext.Provider>
  )
}

export default ReactContextApiProvider