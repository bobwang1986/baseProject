import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from './rootReducer'
import DevTools from '../config/DevTools';
const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk,
        logger
    ),
    DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  // if (module.hot) {
  //   module.hot.accept('./rootReducer', () => {
  //     const nextReducer = require('./rootReducer')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}
