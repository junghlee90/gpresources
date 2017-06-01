import { _fetch, apiUrl } from '../lib/utils'

const resourceUrl = `${apiUrl().API_URL}${'/resource'}`

export function fetchCampaigns () {
  return _fetch(`${resourceUrl}`)
}

export function createResource (resource) {
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resource)
  }

  return _fetch(`${resourceUrl}`, requestParams)
}
