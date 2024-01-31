import { FC, useContext } from "react";
import UIContext from "../../contexts/UIContext";
import { 
  Card,
  Button,
} from "antd";


const UIComponentBlock: FC = () => {
  const { label, size, color } = useContext(UIContext)

  return (
    <Card
      style={{ width: '400px' }}
      className="mb-2"
    >
      <Button size={size} type="primary" style={{ background: color }}>{label}</Button>
    </Card>
  )
}

export default UIComponentBlock