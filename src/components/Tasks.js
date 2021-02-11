import {connect} from "react-redux";
import {addTask, removeTask, renameTask, toggleIsEditing} from "../store/actions/TasksActions";
import Task from "./Task";
import styled from "styled-components"
import TaskCreateForm from "./TaskCreateForm";

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

const Tasks = (props) => {

    const saveNewTaskName = (id, name) => {
        props.renameTask(id, name)
        props.toggleIsEditing(id)
    }

    const toggleEditing = (id) => {
        props.toggleIsEditing(id)
    }

    let tasksList = props.tasks.map((task) => {
        return (
            <Task
                key={task.id}
                {...task}
                saveNewTaskName={saveNewTaskName}
                toggleEditing={() => toggleEditing(task.id)}
                remove={() => props.removeTask(task.id)}
            >{task.id}</Task>
        )
    })

    return (
        <Container>
            <Paper>
                <TaskCreateForm addTask={props.addTask}/>
            </Paper>
            <Paper>
                <PaperTitle>Список задач</PaperTitle>
                {tasksList}
            </Paper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks
    }
}


export default connect(mapStateToProps, {addTask, renameTask, toggleIsEditing, removeTask})(Tasks)