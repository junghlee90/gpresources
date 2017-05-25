import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/MainReducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
