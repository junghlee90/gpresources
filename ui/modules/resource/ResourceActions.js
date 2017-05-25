import {
  fetchCampaigns
} from '../../services/Resource'
import {
  GET_RESOURCE_REQUEST,
  GET_RESOURCE_SUCCESS,
  GET_RESOURCE_FAILURE
} from './ResourceActionTypes'

export const getResources = () => {
  return (dispatch, getState) => {
    dispatch(getResourceRequest())
    return fetchCampaigns()
      .then(resources => dispatch(getResourceSuccess(resources)))
      .catch(() => dispatch(getResourceFailure()))
  }
}

const getResourceFailure = () => {
  return {
    type: GET_RESOURCE_FAILURE,
    msg: 'Failed to fetch resources'
  }
}

const getResourceSuccess = (resources) => {
  return {
    type: GET_RESOURCE_SUCCESS,
    resources
  }
}

const getResourceRequest = () => {
  return {
    type: GET_RESOURCE_REQUEST
  }
}
