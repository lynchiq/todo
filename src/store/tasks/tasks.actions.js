import {
  ADD_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  TOGGLE_COMPLETED,
  TOGGLE_EDITING
} from './tasks.action.types'

export function addTask(name) {
  return {
    type: ADD_TASK,
    payload: name
  }
}

export function renameTask(id, name) {
  return {
    type: RENAME_TASK,
    payload: { id, name }
  }
}

export function toggleTaskEditing(id) {
  return {
    type: TOGGLE_EDITING,
    payload: id
  }
}

export function toggleTaskCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  }
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    payload: id
  }
}
