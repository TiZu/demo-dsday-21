import React from 'react'

import { Button } from 'primereact/button'

function ActionColumnTemplate(): React.ReactElement {
  return (
    <div>
      <Button
        icon="pi pi-pencil"
        className="p-button p-button-text p-button-rounded p-button-secondary"
      />
      <Button
        icon="pi pi-trash"
        className="p-button p-button-text p-button-rounded p-button-danger"
      />
    </div>
  )
}

export default ActionColumnTemplate
