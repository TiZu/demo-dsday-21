import React, { useRef } from 'react'

import { ITodo } from '../../../data/todos'

import RowGroupHeaderTemplate from './RowGroupHeaderTemplate'
import RowGroupFooterTemplate from './RowGroupFooterTemplate'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import TableHeader from './TableHeader'
import ActionColumnTemplate from './ActionColumnTemplate'
import ToggleColumnTemplate from './ToggleColumnTemplate'
import DateColumnTemplate from './DateColumnTemplate'

interface TableProps {
  data?: ITodo[]
  mutate: any
}

function Table({ data, mutate }: TableProps): React.ReactElement {
  const tableRef = useRef<DataTable | null>(null)

  const tableHeader = <TableHeader countTodos={data?.length || 0} />

  const toggleColumnTemplate = (rowData: ITodo): React.ReactElement => (
    <ToggleColumnTemplate todo={rowData} mutate={mutate} />
  )

  const actionColumnTemplate = (): React.ReactElement => (
    <ActionColumnTemplate />
  )

  const rowGroupHeaderTemplate = (rowData: ITodo): React.ReactElement => (
    <RowGroupHeaderTemplate data={rowData} />
  )

  const rowGroupFooterTemplate = (): React.ReactElement => (
    <RowGroupFooterTemplate />
  )

  const dateColumnTemplate = (rowData: ITodo): React.ReactFragment => (
    <DateColumnTemplate todo={rowData} />
  )

  return (
    <div>
      <div className="card">
        <DataTable
          value={data}
          ref={tableRef}
          rowGroupMode="subheader"
          sortMode="single"
          sortField="done"
          sortOrder={1}
          groupField="done"
          header={tableHeader}
          rowGroupHeaderTemplate={rowGroupHeaderTemplate}
          rowGroupFooterTemplate={rowGroupFooterTemplate}
        >
          <Column
            field="done"
            headerStyle={{ width: '5rem' }}
            body={toggleColumnTemplate}
          />
          <Column field="id" header="ID" headerStyle={{ width: '5rem' }} />
          <Column
            field="text"
            header="Text"
            filter
            filterMatchMode="contains"
            filterPlaceholder="Type to filter todos..."
          />
          <Column
            field="deadline"
            header="Due Date"
            headerStyle={{ width: '20rem' }}
            body={dateColumnTemplate}
          />
          <Column
            field="done"
            headerStyle={{ width: '8rem' }}
            body={actionColumnTemplate}
          />
        </DataTable>
      </div>
    </div>
  )
}

export default Table
