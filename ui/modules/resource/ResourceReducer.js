import { combineReducers } from 'redux'
import {
  GET_RESOURCE_REQUEST,
  GET_RESOURCE_SUCCESS,
  GET_RESOURCE_FAILURE
} from './ResourceActionTypes'

const items = (state = [], action) => {
  switch (action.type) {
    case GET_RESOURCE_SUCCESS:
      return action.resources
    default:
      return state
  }
}

const resourceReducer = combineReducers({
  items
})

export default resourceReducer
