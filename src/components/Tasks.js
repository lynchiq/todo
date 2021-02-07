import React, {useState} from "react";
import Task from "./Task";
import TaskCreateForm from "./TaskCreateForm";

import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const TasksWrapper = styled.div`
  margin-top: 20px;
  padding: 15px 30px;
  width: 800px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 5px 20px 0 #afafaf;
`

const TasksTitle = styled.h1`
  text-align: center;
`

const TasksList = styled.div`
  margin-top: 40px;
`

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
        <Container>
            <TasksWrapper>
                <TasksTitle>Список задач</TasksTitle>
                <TaskCreateForm addTask={addTask}/>
                <TasksList>
                    {tasksList}
                </TasksList>
            </TasksWrapper>
        </Container>
    )
}

export default Tasks