export function addTask(name) {
    return {
        type: 'ADD_TASK',
        payload: name
    }
}

export function renameTask(id, name) {
    return {
        type: 'RENAME_TASK',
        payload: {id, name}
    }
}

export function toggleIsEditing(id) {
    return {
        type: 'TOGGLE_IS_EDITING',
        payload: id
    }
}

export function removeTask(id) {
    return {
        type: 'REMOVE_TASK',
        payload: id
    }
}