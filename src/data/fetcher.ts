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

export async function postWithBaseUrl(url: string, data: any): Promise<any> {
  const fullUrl = `${baseUrl}${url}`

  const response = await fetch(fullUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const fetchError = new FetchError('Error performing post request.')
    fetchError.statusCode = response.status
    fetchError.statusText = response.statusText

    const result = await response.json()
    fetchError.details = result ? JSON.stringify(result) : undefined

    throw fetchError
  }

  return await response.json()
}

export async function putWithBaseUrl(url: string, data: any): Promise<any> {
  const fullUrl = `${baseUrl}${url}`

  const response = await fetch(fullUrl, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const fetchError = new FetchError('Error performing post request.')
    fetchError.statusCode = response.status
    fetchError.statusText = response.statusText

    const result = await response.json()
    fetchError.details = result ? JSON.stringify(result) : undefined

    throw fetchError
  }

  return await response.json()
}
