import React from 'react'

import { ITodo } from '../../../data/todos'

import { Button } from 'primereact/button'
import { requestDeleteTodo } from '../../../data/todos/api'

interface ActionColumnTemplateProps {
  todo: ITodo
  mutate: any
  onEdit: any
}

function ActionColumnTemplate({
  todo,
  mutate,
  onEdit,
}: ActionColumnTemplateProps): React.ReactElement {
  const onDeleteClick = async (): Promise<void> => {
    await requestDeleteTodo(todo.id as number)
    mutate()
  }

  return (
    <div>
      <Button
        icon="pi pi-pencil"
        className="p-button p-button-text p-button-rounded p-button-secondary"
        onClick={onEdit}
      />
      <Button
        icon="pi pi-trash"
        className="p-button p-button-text p-button-rounded p-button-danger"
        onClick={onDeleteClick}
      />
    </div>
  )
}

export default ActionColumnTemplate
