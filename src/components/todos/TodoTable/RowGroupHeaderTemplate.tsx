import React from 'react'

import { ITodo } from '../../../data/todos'
import { Tag } from 'primereact/tag'

interface RowGroupHeaderTemplateProps {
  data: ITodo
}

function RowGroupHeaderTemplate({
  data,
}: RowGroupHeaderTemplateProps): React.ReactElement {
  return (
    <>
      {data.done ? (
        <Tag value="DONE" icon="pi pi-check" severity="success" />
      ) : (
        <Tag value="TODO" icon="pi pi-info-circle" severity="info" />
      )}
    </>
  )
}

export default RowGroupHeaderTemplate
