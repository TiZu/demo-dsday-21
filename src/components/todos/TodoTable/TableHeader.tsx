import React from 'react'

import { Button } from 'primereact/button'

interface TableHeaderProps {
  countTodos: number
}

function TableHeader({ countTodos }: TableHeaderProps): React.ReactElement {
  return (
    <div className="table-header flex justify-content-between">
      <div className="flex align-items-center justify-content-center">
        Todos {countTodos > 0 ? `(${countTodos})` : ``}
      </div>
      <div className="flex align-items-center justify-content-center">
        <Button label="Add Todo" icon="pi pi-plus" />
      </div>
    </div>
  )
}

export default TableHeader
