/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'unfetch'
import { FetchError } from './fetchError'

const baseUrl = process.env.REACT_APP_API_BASEURL || 'http://localhost:3001'

export async function fetchWithBaseUrl(url: string): Promise<any> {
  const fullUrl = `${baseUrl}${url}`

  const response = await fetch(fullUrl)

  if (!response.ok) {
    const fetchError = new FetchError('Error fetching data.')
    fetchError.statusCode = response.status
    fetchError.statusText = response.statusText

    const result = await response.json()
    fetchError.details = result ? JSON.stringify(result) : undefined

    throw fetchError
  }

  return await response.json()
}
