import React from 'react'

import {
  ITodo,
  requestCreateTodo,
  requestUpdateTodo,
} from '../../../data/todos'

import { parseJSON } from 'date-fns'

import { useFormik } from 'formik'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'

interface CreateEditDialogProps {
  isOpen: boolean
  todo: ITodo
  onHide: any
  mutate: any
}

function CreateEditDialog({
  isOpen,
  todo,
  onHide,
  mutate,
}: CreateEditDialogProps): React.ReactElement {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: todo,
    validate: async (data: ITodo) => {
      const errors: { text?: string; deadline?: string } = {}

      if (!data?.text) {
        errors.text = 'Text is required!'
      }

      if (!data?.deadline) {
        errors.deadline = 'Due Date is required!'
      }

      return errors
    },
    onSubmit: async (data: ITodo) => {
      if (data.id) {
        await requestUpdateTodo(data.id, data)
      } else {
        await requestCreateTodo(data)
      }

      formik.resetForm()
      onHide()
      mutate()
    },
  })

  const isFormFieldValid = (name: 'text' | 'deadline'): boolean =>
    !!(formik.touched[name] && formik.errors[name])

  const getFormErrorMessage = (
    name: 'text' | 'deadline',
  ): React.ReactFragment => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    )
  }

  return (
    <Dialog
      header="Create/Edit Todo"
      onHide={onHide}
      visible={isOpen}
      style={{ width: '35vw' }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="card">
          <div className="field">
            <span>
              <label
                htmlFor="text"
                className={classNames({
                  'p-error': isFormFieldValid('text'),
                })}
              >
                Name*
              </label>
              <InputText
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                className={classNames({
                  'inputfield w-full': true,
                  'p-invalid': isFormFieldValid('text'),
                })}
              />
            </span>
            {getFormErrorMessage('text')}
          </div>
          <div className="field">
            <span>
              <label
                htmlFor="deadline"
                className={classNames({
                  'p-error': isFormFieldValid('deadline'),
                })}
              >
                Due Date*
              </label>
              <Calendar
                id="deadline"
                name="deadline"
                value={parseJSON(formik.values.deadline)}
                onChange={formik.handleChange}
                showIcon
                className={classNames({
                  'inputfield w-full': true,
                  'p-invalid': isFormFieldValid('deadline'),
                })}
              />
            </span>
            {getFormErrorMessage('deadline')}
          </div>
          <div className="field">
            <Button
              type="submit"
              label="Submit"
              className="inputfield w-full"
            />
          </div>
        </div>
      </form>
    </Dialog>
  )
}

export default CreateEditDialog
