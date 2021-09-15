export class FetchError extends Error {
  statusCode?: number
  statusText?: string
  details?: string
}
