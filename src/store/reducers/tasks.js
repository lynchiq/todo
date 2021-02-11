const initialState = {
    tasks: [
        {id: 1, isActive: true, isEditing: false, name: 'Создать инпут'},
        {id: 2, isActive: true, isEditing: false, name: 'Создать кнопку'},
        {id: 3, isActive: false, isEditing: false, name: 'Создать функцию'},
        {id: 4, isActive: false, isEditing: false, name: 'Создать приложение'},
    ]
}

export function tasksReducer(state = initialState, action) {
    function nameIsUnique(name) {
        return state.tasks.findIndex(task => task.name === name) === -1
    }
    function createTask(name) {
        return {
            id: state.tasks.length + 1,
            isActive: false,
            name: name
        }
    }

    switch (action.type) {
        case 'ADD_TASK':
            if (!nameIsUnique(action.payload)) {
                alert('Название должно быть уникальным')
                return state
            }
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    createTask(action.payload)
                ]
            }
        case 'RENAME_TASK':
            if (!nameIsUnique(action.payload)) {
                alert('Название должно быть уникальным')
                return state
            }
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? {...task, name: action.payload.name}
                        : task
                )
            }
        case 'TOGGLE_IS_EDITING':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? {...task, isEditing: !task.isEditing}
                        : task
                )
            }
        case 'REMOVE_TASK':
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
