import React from 'react'

import { useAllTodos } from '../../data/todos'
import { TodoTable } from './TodoTable'

function TodoList(): React.ReactElement {
  const { data, isLoading, error, mutate } = useAllTodos()

  if (isLoading) return <div>Loading ...</div>
  if (error)
    return (
      <div>{`Error: ${error.statusCode} // ${error.statusText} // ${error.details}`}</div>
    )

  return (
    <>
      <TodoTable data={data} mutate={mutate} />
    </>
  )
}

export default TodoList
