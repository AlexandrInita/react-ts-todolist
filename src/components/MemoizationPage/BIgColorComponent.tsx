import { 
  memo,
} from "react";

const BigColorComponent = memo(({ initObj, chooseColor }: { initObj: { countElement: number, color: string }, test: () => void }) => {
  const blocks = Array(initObj.countElement).fill(0).map((el, id) => {
    return {
      id: id,
      hexColor: `#${(Math.abs(id)).toString(16).padEnd(6, initObj.color)}50`
    }
  })

  console.log('render')  

  return (
    <div style={{ maxHeight:"300px", overflow: "auto"}}>
    {
      blocks.map(block => 
        <div 
          key={block.id}
          style={{ cursor: "pointer", backgroundColor: block.hexColor, height: "36px" }}
          onClick={() => { chooseColor(block.hexColor) }}
        >
          {block.hexColor}
          </div>
      )
    }
    </div>
  )
})

export default BigColorComponent