export interface ITodo {
  id?: number
  deadline: Date
  text?: string
  done: boolean
}

export const emptyTodo: ITodo = {
  text: '',
  deadline: new Date(),
  done: false,
}
