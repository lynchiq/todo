import React, { useState } from 'react'
import { PrimaryButton } from '../../common/Button'
import { Input } from '../../common/Input/Input'
import { Row, StyledButtonContainer } from './TaskCreateForm.style'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/tasks/tasks.actions'

export const TaskCreateForm = () => {
  const dispatch = useDispatch()
  let [name, setName] = useState('')

  const saveTaskName = e => {
    e.preventDefault()

    if (name.trim().length) {
      dispatch(addTask(name))
      setName('')
    }
  }

  return (
    <Row>
      <Input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={'Введите название задачи'}
      />
      <StyledButtonContainer>
        <PrimaryButton onClick={saveTaskName}>Добавить</PrimaryButton>
      </StyledButtonContainer>
    </Row>
  )
}
