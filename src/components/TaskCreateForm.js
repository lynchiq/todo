import React, {useState} from 'react';

function TaskCreateForm(props) {
    let [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        if (name.replace(/\s/g, '') !== '') {
            props.addTask(name)
            setName('')
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="task-list-form">
            <input className="task-list-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button className="task-list-btn">+</button>
        </form>
    )
}

export default TaskCreateForm