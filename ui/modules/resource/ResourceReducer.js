import { combineReducers } from 'redux'
import {
  GET_RESOURCE_SUCCESS,
  ADD_RESOURCE_NEW,
  RESOURCE_NAME_CHANGED,
  RESOURCE_COUNT_CHANGED,
  UPDATE_CHECKOUT_ITEM,
  TOGGLE_RESOURCE
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
      let item = action.item
      return Object.assign({}, state, {[item.id]: item.count})
    case TOGGLE_RESOURCE:
      if (action.id in state) {
        let { [action.id]: deletedItem, ...rest } = state
        return rest
      } else {
        // todo should keep the original value instead of reassign to 1
        return Object.assign({}, state, {[action.id]: 1})
      }
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
