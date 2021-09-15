/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import './TodoList.scss'

import { ITodo, useAllTodos } from '../../data/todos'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Checkbox } from 'primereact/checkbox'
import { Tag } from 'primereact/tag'

function TodoList(): ReactElement {
  const { data, isLoading, error } = useAllTodos()

  if (isLoading) return <div>Loading ...</div>
  if (error)
    return (
      <div>{`Error: ${error.statusCode} // ${error.statusText} // ${error.details}`}</div>
    )

  const headerTemplate = (data: ITodo): React.ReactElement => {
    return (
      <>
        <div className="max-w-min">
          {data.done ? (
            <Tag value="DONE" icon="pi pi-check" severity="success" />
          ) : (
            <Tag value="TODO" icon="pi pi-info-circle" severity="info" />
          )}
        </div>
      </>
    )
  }

  const footerTemplate = (): React.ReactElement => {
    return <></>
  }

  const toggleDoneTemplate = (rowData: ITodo): React.ReactElement => {
    return <Checkbox checked={rowData.done} onMouseDown={() => alert('test')} />
  }

  return (
    <DataTable
      value={data}
      rowGroupMode="subheader"
      sortMode="single"
      sortField="done"
      sortOrder={1}
      groupField="done"
      rowGroupHeaderTemplate={headerTemplate}
      rowGroupFooterTemplate={footerTemplate}
    >
      <Column
        headerStyle={{ width: '5rem' }}
        field="done"
        body={toggleDoneTemplate}
      />
      <Column headerStyle={{ width: '10rem' }} field="id" header="id" />
      <Column field="text" header="text" filter filterMatchMode="contains" />
      <Column field="deadline" header="due date" filter />
    </DataTable>
  )
}

export default TodoList
