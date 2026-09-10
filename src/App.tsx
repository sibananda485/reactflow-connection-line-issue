import { Background, ReactFlow } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import ButtonHandleDemo from "./ButtonHandleDemo"

const defaultNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Node" },
    type: "sourceHandleDemo",
  },
]

const nodeTypes = {
  sourceHandleDemo: ButtonHandleDemo,
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow defaultNodes={defaultNodes} nodeTypes={nodeTypes} fitView>
        <Background />
      </ReactFlow>
    </div>
  )
}
