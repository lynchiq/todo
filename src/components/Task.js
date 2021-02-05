import React from "react";

function Task(props) {
    return (
        <div className="task-list-item">
            <label className={["task-list-item-label", props.active && "completed"].join(' ')}>
                <input type="checkbox" checked={props.active} onChange={() => props.toggleActive(props.id)}/>
                {props.name}
            </label>
            <button onClick={() => props.removeTask(props.id)}>X</button>
        </div>
    )
}

export default Task