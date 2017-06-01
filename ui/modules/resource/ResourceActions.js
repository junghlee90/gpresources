import {
  fetchCampaigns,
  createResource
} from '../../services/Resource'
import {
  GET_RESOURCE_REQUEST,
  GET_RESOURCE_SUCCESS,
  GET_RESOURCE_FAILURE,
  RESOURCE_NAME_CHANGED,
  RESOURCE_COUNT_CHANGED,
  ADD_RESOURCE_REQUEST,
  ADD_RESOURCE_SUCCESS,
  ADD_RESOURCE_FAILURE,
  ADD_RESOURCE_NEW
} from './ResourceActionTypes'

export const addResourceNew = () => {
  return {
    type: ADD_RESOURCE_NEW
  }
}

export const addResource = () => {
  return (dispatch, getState) => {
    dispatch(addResourceRequest())

    let resource = {
      name: getState().resources.currentResourceName,
      count: getState().resources.currentResourceCount
    }

    return createResource(resource)
      .then(resource => dispatch(addResourceSuccess(resource)))
      .catch(() => dispatch(addResourceFailure()))
  }
}

const addResourceSuccess = (msg) => {
  return {
    type: ADD_RESOURCE_SUCCESS,
    msg
  }
}

const addResourceFailure = (msg) => {
  return {
    type: ADD_RESOURCE_FAILURE
  }
}

const addResourceRequest = () => {
  return {
    type: ADD_RESOURCE_REQUEST
  }
}

export const resourceNameChanged = (name) => {
  return {
    type: RESOURCE_NAME_CHANGED,
    name
  }
}

export const resourceCountChanged = (count) => {
  return {
    type: RESOURCE_COUNT_CHANGED,
    count
  }
}

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
