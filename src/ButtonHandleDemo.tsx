import { Plus } from "lucide-react"
import { type ConnectionState, Position, useConnection } from "@xyflow/react"

import { ButtonHandle } from "@/components/button-handle"
import { BaseNode, BaseNodeContent } from "@/components/base-node"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const onClick = () => {
  window.alert(`Handle button has been clicked!`)
}

const selector = (connection: ConnectionState) => {
  return connection.inProgress
}

const ButtonHandleDemo = () => {
  const connectionInProgress = useConnection(selector)

  return (
    <BaseNode>
      <BaseNodeContent>
        Initial Node
        <ButtonHandle
          type="target"
          position={Position.Bottom}
          showButton={!connectionInProgress}
        >
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  size="icon-xs"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Plus size={10} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle>Add a node</DialogTitle>
                  <DialogDescription>
                    Enter node name here. Click on add when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                  <Field>
                    <Label htmlFor="node-name">Node Name</Label>
                    <Input
                      id="node-name"
                      name="node-name"
                      defaultValue="Transform node"
                    />
                  </Field>
                </FieldGroup>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Add node</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </ButtonHandle>
      </BaseNodeContent>
    </BaseNode>
  )
}

export default ButtonHandleDemo
