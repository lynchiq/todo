import React, {useState} from "react";
import TaskItem from "./TaskItem";
import TaskCreateForm from "./TaskCreateForm";

import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Paper = styled.div`
  margin-top: 20px;
  padding: 15px 30px;
  width: 800px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 5px 20px 0 #afafaf;
`

const PaperTitle = styled.h1`
  margin-top: 0;
  font-size: 22px;
  font-weight: normal;
  text-align: center;
`

const TaskListWrapper = styled.div`
  
`

function TasksList() {

    let [tasks, setTasks] = useState([
        {id: 1, isActive: true, name: 'Создать инпут'},
        {id: 2, isActive: true, name: 'Создать кнопку'},
        {id: 3, isActive: false, name: 'Создать функцию'},
        {id: 4, isActive: false, name: 'Создать приложение'},
    ])

    function createNewTaskByName(name) {
        return {
            id: tasks.length + 1,
            completed: false,
            name: name
        }
    }

    function addTask(name) {
        setTasks([...tasks, createNewTaskByName(name)])
    }

    const toggleIsActive = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? {...task, isActive: !task.isActive}
                : task
        ))
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => {
            return task.id !== id
        }))
    }

    let tasksList = tasks.map((task) => {
        return (
            <TaskItem key={task.id} id={task.id} isActive={task.isActive} name={task.name} toggleIsActive={toggleIsActive} removeTask={removeTask}/>
        )
    })

    return (
        <Container>
            <Paper>
                <TaskCreateForm addTask={addTask}/>
            </Paper>
            <Paper>
                <PaperTitle>Список задач</PaperTitle>
                <TaskListWrapper>
                    {tasksList}
                </TaskListWrapper>
            </Paper>
        </Container>
    )
}

export default TasksList