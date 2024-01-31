import { FC, useContext } from "react";
import UIContext from "../../contexts/UIContext";
import { 
  Card,
  Radio,
} from "antd";


const SizeBlock: FC = () => {
  const { size, dispatch } = useContext(UIContext)

  const options = [
    { label: 'small', value: 'small' },
    { label: 'middle', value: 'middle' },
    { label: 'large', value: 'large' },
  ];

  return (
    <Card
      style={{ width: '400px' }}
      className="mb-2"
    >
      <Radio.Group options={options} value={size} onChange={(e) => { dispatch({ type: 'setSize', payload: e.target.value })}} />
    </Card>
  )
}

export default SizeBlock