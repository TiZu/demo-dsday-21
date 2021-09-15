import React from 'react'

import { ITodo, requestUpdateTodo } from '../../../data/todos'
import { Checkbox } from 'primereact/checkbox'

interface ToggleColumnTemplateProps {
  todo: ITodo
  mutate: any
}

function ToggleColumnTemplate({
  todo,
  mutate,
}: ToggleColumnTemplateProps): React.ReactElement {
  const toggleTodoStatusRequest = async (todo: ITodo): Promise<void> => {
    const updatedTodo = { ...todo, done: !todo.done }
    await requestUpdateTodo(updatedTodo.id as number, updatedTodo)
    mutate()
  }

  return (
    <Checkbox
      checked={todo.done}
      onMouseDown={() => toggleTodoStatusRequest(todo)}
    />
  )
}

export default ToggleColumnTemplate
