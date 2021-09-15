import React from 'react'

import { Layout } from '../components/layout'
import { TodoList } from '../components/todos'

function TodoPage(): React.ReactElement {
  return (
    <Layout>
      <TodoList />
    </Layout>
  )
}

export default TodoPage
