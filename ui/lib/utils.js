import fetch from 'isomorphic-fetch'

export function apiUrl () {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        API_URL: 'http://localhost:8000/api'
      }
    case 'production':
    default:
      return {
        API_URL: '/api'
      }
  }
}

export function _fetch (url, requestParams = {}) {
  requestParams['credentials'] = 'same-origin'

  return fetch(url, requestParams)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return response.json()
          .then((err) => {
            throw err
          })
      }
    })
}
