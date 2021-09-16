import { ITodo } from '.'
import { deleteWithBaseUrl, postWithBaseUrl, putWithBaseUrl } from '../fetcher'

export async function requestCreateTodo(todo: ITodo): Promise<ITodo> {
  return await postWithBaseUrl(`/todos`, todo)
}

export async function requestUpdateTodo(
  todoId: number,
  todo: ITodo,
): Promise<ITodo> {
  return await putWithBaseUrl(`/todos/${todoId}`, todo)
}

export async function requestDeleteTodo(todoId: number): Promise<any> {
  return await deleteWithBaseUrl(`/todos/${todoId}`)
}
