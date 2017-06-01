import { combineReducers } from 'redux'
import {
  GET_RESOURCE_REQUEST,
  GET_RESOURCE_SUCCESS,
  GET_RESOURCE_FAILURE,
  ADD_RESOURCE_NEW,
  RESOURCE_NAME_CHANGED,
  RESOURCE_COUNT_CHANGED
} from './ResourceActionTypes'

const items = (state = [], action) => {
  switch (action.type) {
    case GET_RESOURCE_SUCCESS:
      return action.resources
    default:
      return state
  }
}

const currentResourceName = (state = '', action) => {
  switch (action.type) {
    case ADD_RESOURCE_NEW:
      return ''
    case RESOURCE_NAME_CHANGED:
      return action.name
    default:
      return state
  }
}

const currentResourceCount = (state = '', action) => {
  switch (action.type) {
    case ADD_RESOURCE_NEW:
      return ''
    case RESOURCE_COUNT_CHANGED:
      return action.count
    default:
      return state
  }
}

const resourceReducer = combineReducers({
  items,
  currentResourceName,
  currentResourceCount
})

export default resourceReducer
