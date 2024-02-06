import { 
  FC,
  useCallback,
  useState,
  useMemo,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  DownOutlined, 
  LeftOutlined, 
  UpOutlined 
} from '@ant-design/icons'
import { 
  Card,
  Button,
  Input,
  Typography,
} from 'antd'
import BigColorComponent from '../components/MemoizationPage/BIgColorComponent'

const MemoizationPage: FC = () => {  
  const navigate = useNavigate()
  const [showBigColorComponent, setShowBigColorComponent] = useState(false)
  const [triggerRenderBoolean, setTriggerRenderBoolean] = useState(false)
  const [countThousend, setCountThousend] = useState(20)
  const [color, setColor] = useState('ffffff')

  const initObj = useMemo(() => {
    return {
      countElement: countThousend * 1000,
      color: color.replace('#', ''),
    }
  }, [countThousend, color])

  const chooseColorWhithLog = useCallback((hexColor: string) => {
    console.log('chooseColorWhithLog');
    setColor(hexColor)
  }, [])

  console.log('render MemoizationPage');
  

  return (
    <Card 
      title={
        <Button 
          type="text" 
          icon={<LeftOutlined />}
          onClick={() => { navigate('/') }}
        >
          Назад
        </Button>
      } 
      bordered={false} 
      style={{ width: '400px' }}
    >
      <div className="d-flex mb-2">
        <Typography.Title level={5} style={{ marginTop: '8px', width: '100%'}}>Количество тысяч:</Typography.Title>
        <Input 
          type="number"
          value={countThousend}
          onChange={(e) => { setCountThousend((state) => {      
            if (Number(e.target.value) <= 0) return 0
            if (Number(e.target.value) >= 20) return state
            return Number(e.target.value)
            }) 
          }}
        />
      </div>

      <Button 
        type="text" 
        icon={showBigColorComponent ? <UpOutlined /> : <DownOutlined />}
        className='mb-2'
        onClick={() => { setShowBigColorComponent(state => !state) }}
      >
        {showBigColorComponent ? 'Скрыть' : 'Открыть'}
      </Button>

      <Button 
        type="text" 
        className='mb-2'
        onClick={() => { setTriggerRenderBoolean(state => !state) }}
      >
        Рендер
      </Button>

      { showBigColorComponent && <BigColorComponent initObj={initObj} chooseColor={chooseColorWhithLog} /> }
    </Card>
  )
}

export default MemoizationPage