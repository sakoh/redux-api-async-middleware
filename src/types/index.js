import { AxiosRequestConfig } from 'axios'
import { Reducer } from 'redux'

/**
 * `An enum contains the three values that are related to three standard types of actions
 * that a Redux application typically handles during a network request. These actions (`REQUEST`, `DATA`,
 * and `ERROR`) relate respectively to the loading stage, the success call of an API endpoint, and an unsuccessful
 * call of an API endpoint.
 */
export type ActionType =
  | 'REQUEST'
  | 'DATA'
  | 'ERROR'

/**
 * An error that received by the Redux Store as a result of an unsuccessful network request.
 */
export type RequestError = {
  +message: string
}

/**
 * a union type between `RequestError` and `null`.
 */
export type RequestErrorOrNull = RequestError | null

/**
 * An action that changes a value in the Redux Store based on a payload of data received from
 * a successful network request.
 */
export type DataAction = {
  +type: string
  +payload: {
    +data: object,
  }
}


export type SimpleAction = {
  +type: string
}

/**
 * An action that pushes an error message to the Redux store after an unsuccessful network request.
 */
export type ErrorAction = {
  +type: string
  +payload: {
    +error: RequestErrorOrNull,
  }
}

/**
 * An action that is received by the `apiMiddleware` to make network request to an API server,
 * while at the same time is dispatched to the reducers to set the Redux application in a loading state.
 */
export type RequestAction = {
  +type: string
  +payload: {
    +axiosRequestConfig: AxiosRequestConfig,
    +key: string,
    +errorMessage: string,
  }
}

/**
 * A type of reducer that handles all the standard types of actions that dispatched by the `apiMiddleware`.
 */
export type RequestReducer = Reducer<{
  +data: Reducer<Object>,
  +error: Reducer<RequestErrorOrNull>,
  +loading: Reducer<Boolean>,
}>
