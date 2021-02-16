import React, { useState } from 'react'
import { Input } from '../../common/Input/Input'
import {
  PrimaryButton,
  SuccessButton,
  WarningButton
} from '../../common/Button'
import { Checkbox } from '../../common/Checkbox/Checkbox'
import { StyledButtonGroup, StyledTask } from './Task.style'
import { useDispatch } from 'react-redux'
import {
  removeTask,
  renameTask,
  toggleTaskCompleted,
  toggleTaskEditing
} from '../../store/tasks/tasks.actions'

const Task = ({ id, name, isEditing, completed }) => {
  const dispatch = useDispatch()

  const [newName, setNewName] = useState(name)

  const rename = () => {
    if (newName.trim().length) {
      dispatch(renameTask(id, newName))
      dispatch(toggleTaskEditing(id))
    }
  }

  const remove = () => {
    dispatch(removeTask(id))
  }

  const cancelEditing = () => {
    dispatch(toggleTaskEditing(id))
  }

  const toggleEditing = () => {
    dispatch(toggleTaskEditing(id))
  }

  const toggleCompleted = () => {
    dispatch(toggleTaskCompleted(id))
  }

  if (isEditing) {
    return (
      <StyledTask>
        <Input
          type='text'
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder={'Введите название задачи'}
        />
        <StyledButtonGroup>
          <SuccessButton onClick={rename}>Сохранить</SuccessButton>
          <WarningButton onClick={cancelEditing}>Отменить</WarningButton>
        </StyledButtonGroup>
      </StyledTask>
    )
  }

  return (
    <StyledTask>
      <Checkbox label={name} checked={completed} onChange={toggleCompleted} />
      <StyledButtonGroup>
        <PrimaryButton onClick={toggleEditing}>Редактировать</PrimaryButton>
        <WarningButton onClick={remove}>Удалить</WarningButton>
      </StyledButtonGroup>
    </StyledTask>
  )
}

export default Task
