import { 
  FC, 
} from 'react'
import TopBlock from '../components/ReactContextApiPage/TopBlock'
import SizeBlock from '../components/ReactContextApiPage/SizeBlock'
import UIComponentBlock from '../components/ReactContextApiPage/UIComponentBlock'
import ColorBlock from '../components/ReactContextApiPage/ColorBlock'
import LabelBlock from '../components/ReactContextApiPage/LabelBlock'
import LinkBlock from '../components/ReactContextApiPage/LinkBlock'
import ReactContextApiProvider from '../components/ReactContextApiPage/ReactContextApiProvider.tsx'

const ReactContextApiPage: FC = () => {  
  return (
    <ReactContextApiProvider>
      <TopBlock />
      <LabelBlock />
      <SizeBlock />
      <ColorBlock />
      <UIComponentBlock />  
      <LinkBlock />
    </ReactContextApiProvider>
  )
}

export default ReactContextApiPage