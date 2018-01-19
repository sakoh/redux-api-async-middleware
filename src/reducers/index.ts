import { combineReducers } from 'redux'
import { RequestReducer } from '../models'
import { createDataReducer } from './data'
import { createErrorReducer } from './error'
import { createLoadingReducer } from './loading'

export const createRequestReducer = (key: string): RequestReducer => combineReducers({
  data: createDataReducer(key),
  error: createErrorReducer(key),
  loading: createLoadingReducer(key),
})
