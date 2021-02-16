import {
  ADD_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  TOGGLE_COMPLETED,
  TOGGLE_EDITING
} from './tasks.types'

const initialState = {
  tasks: [
    { id: 1, completed: true, isEditing: false, name: 'Создать инпут' },
    { id: 2, completed: true, isEditing: false, name: 'Создать кнопку' },
    { id: 3, completed: false, isEditing: false, name: 'Создать функцию' },
    { id: 4, completed: false, isEditing: false, name: 'Создать приложение' }
  ]
}

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            name: action.payload,
            completed: false,
            isEditing: false
          }
        ]
      }
    case RENAME_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, name: action.payload.name }
            : task
        )
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      }
    case TOGGLE_EDITING:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, isEditing: !task.isEditing }
            : task
        )
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task.id !== action.payload
        })
      }
    default:
      return state
  }
}
