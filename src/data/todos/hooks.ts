import useSWR from 'swr'
import { fetchWithBaseUrl } from '../fetcher'
import { FetchError } from '../fetchError'
import { FetchResult } from '../fetchResult'
import { ITodo } from './model'

export function useAllTodos(): FetchResult<ITodo[]> {
  const { data, error, mutate } = useSWR<ITodo[], FetchError>(
    `/todos`,
    fetchWithBaseUrl,
  )

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate,
  }
}

export function useTodoById(todoId: number): FetchResult<ITodo> {
  const { data, error, mutate } = useSWR<ITodo, FetchError>(
    `/todos/${todoId}`,
    fetchWithBaseUrl,
  )

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate,
  }
}
