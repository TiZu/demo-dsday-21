import React from 'react'

import { ITodo } from '../../../data/todos'
import { parseJSON, format } from 'date-fns'

interface DateColumnTemplateProps {
  todo: ITodo
}

function DateColumnTemplate({
  todo,
}: DateColumnTemplateProps): React.ReactElement {
  return <span>{format(parseJSON(todo.deadline as Date), 'MM/dd/yyyy')}</span>
}

export default DateColumnTemplate
