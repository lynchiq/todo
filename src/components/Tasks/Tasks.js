import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import { TaskCreateForm } from '../TaskCreateForm/TaskCreateForm'
import { Container, Paper, PaperTitle } from './Tasks.style'
import { getTasks } from '../../store/tasks/tasks.selectors'

export const Tasks = () => {
  let tasks = useSelector(getTasks)

  let tasksList = tasks.map(task => {
    return <Task key={task.id} {...task} />
  })

  return (
    <Container>
      <Paper>
        <TaskCreateForm />
      </Paper>
      <Paper>
        <PaperTitle>Список задач</PaperTitle>
        {tasksList}
      </Paper>
    </Container>
  )
}
