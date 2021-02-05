import React, {useState} from "react";
import Task from "./Task";
import TaskCreateForm from "./TaskCreateForm";

function Tasks() {

    let [tasks, setTasks] = useState([
        {id: 1, active: true, name: 'Создать инпут'},
        {id: 2, active: true, name: 'Создать кнопку'},
        {id: 3, active: false, name: 'Создать функцию'},
        {id: 4, active: false, name: 'Создать приложение'},
    ])

    function addTask(name) {
        let task = {
            id: tasks.length + 1,
            completed: false,
            name: name
        }

        setTasks([...tasks, task])
    }

    function toggleActive(id) {
        // let foundIndex = tasks.findIndex(task => task.id === id);
        // tasks[foundIndex].active = !tasks[foundIndex].active
        // setTasks([...tasks])

        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.active = !task.active
                return task
            } else {
                return task
            }
        }))
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => {
            return task.id !== id
        }))
    }

    let tasksList = tasks.map((task) => {
        return (
            <Task key={task.id} id={task.id} active={task.active} name={task.name} toggleActive={toggleActive} removeTask={removeTask}/>
        )
    })

    return (
        <div className="container">
            <div className="task-list">
                <h1 className="task-list-title">Список задач</h1>
                <TaskCreateForm addTask={addTask}/>
                <div className="task-list-items">
                    {tasksList}
                </div>
            </div>
        </div>
    )
}

export default Tasks