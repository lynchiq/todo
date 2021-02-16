import { combineReducers, createStore } from 'redux'
import { tasksReducer } from './tasks/tasks.reduser'

export const index = createStore(
  combineReducers({
    tasks: tasksReducer
  })
)
