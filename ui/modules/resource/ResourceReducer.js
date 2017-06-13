import { combineReducers } from 'redux'
import {
  GET_RESOURCE_SUCCESS,
  ADD_RESOURCE_NEW,
  RESOURCE_NAME_CHANGED,
  RESOURCE_COUNT_CHANGED,
  UPDATE_CHECKOUT_ITEM,
  DELETE_CHECKOUT_ITEM
} from './ResourceActionTypes'

const items = (state = [], action) => {
  switch (action.type) {
    case GET_RESOURCE_SUCCESS:
      return action.resources
    default:
      return state
  }
}

const checkoutRequest = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CHECKOUT_ITEM:
      return Object.assign({}, state, {[action.id]: action.count})
    case DELETE_CHECKOUT_ITEM:
      let { [action.id]: deletedItem, ...rest } = state
      return rest
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
  checkoutRequest,
  currentResourceName,
  currentResourceCount
})

export default resourceReducer
