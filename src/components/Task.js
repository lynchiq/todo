import {useState} from 'react'
import {TaskItem} from "./TaskItem";

const Task = (props) => {

    const [newName, setNewName] = useState(props.name)

    const cancelEditing = () => {
        setNewName(props.name)
        props.toggleEditing()
    }

    const saveEditedName = (id, name) => {
        props.saveNewTaskName(id, name)
    }

    return (
        <TaskItem
            {...props}
            newName={newName}
            setNewName={setNewName}
            saveEditedName={() => saveEditedName(props.id, newName)}
            cancelEditing={cancelEditing}
        />
    )
}

export default Task