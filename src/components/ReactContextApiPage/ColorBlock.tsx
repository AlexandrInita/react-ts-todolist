import { 
  FC, 
  useContext, } from "react";
import UIContext from "../../contexts/UIContext";
import { 
  Card,
  ColorPicker,
} from "antd";


const ColorBlock: FC = () => {
  const { color, dispatch } = useContext(UIContext)

  return (
    <Card
      style={{ width: '400px' }}
      className="mb-2"
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span className="mr-2">Выберите цвет: </span>
        <ColorPicker value={color} size="large" onChange={(e) => { dispatch({ type: 'setColor', payload: e.toHexString() }) }} />
      </div>
    </Card>
  )
}

export default ColorBlock