import { _fetch, apiUrl } from '../lib/utils'

const resourceUrl = `${apiUrl().API_URL}${'/resource'}`

export function fetchCampaigns () {
  return _fetch(`${resourceUrl}`)
}
