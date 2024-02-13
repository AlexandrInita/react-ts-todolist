import { LeftOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: FC = () => {
  const navigate = useNavigate()

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
      <div style={{ textAlign: "start" }}>
        <p>
          Это проект с набором основных возможностей React. 
        </p>
        
        <p>Задействованы основные хуки:</p> 
        <ul style={{ fontWeight: "bold" }}>
          <li>useState</li>
          <li>useEffect</li> 
          <li>useRef</li>
        </ul>

        <p>Использованы для мемоизации:</p> 
        <ul style={{ fontWeight: "bold" }}>
          <li>useMemo</li>
          <li>useCallback</li>
          <li>memo</li>
        </ul>
        
        <p>Применен <strong>ContextApi</strong>.</p> 
        
        <p>
          Также используются <strong>Ant Design</strong>, <strong>React-Router-Dom</strong>, <strong>Redux</strong>, <strong>Axios</strong>.
        </p>
      </div>
  </Card>
  )
}

export default AboutPage
