import { combineReducers } from 'redux'
import resources from '../modules/resource/ResourceReducer'

const rootReducer = combineReducers({
  resources
})

export default rootReducer
