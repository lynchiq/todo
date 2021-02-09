import React, {useState} from "react";
import styled from "styled-components";
import {PrimaryButton, SuccessButton, WarningButton} from "../common/Button";
import {Checkbox} from "../common/Checkbox";
import {Input} from "../common/Input";

const StyledTaskItem = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    border-bottom: 1px solid #000;
  }
`

const StyledButtonGroup = styled.div`
  display: flex;
`

const TaskItem = ({id, isActive, name, toggleIsActive, removeTask, renameTask}) => {

    let [isEditing, setIsEditing] = useState(false)
    let [newName, setNewName] = useState(name)

    let handleCheckboxChange = () => {
        toggleIsActive(id)
    }

    let saveNewTaskName = () => {
        renameTask(id, newName)
        setIsEditing(false)
    }

    let cancelTaskNameSaving = () => {
        setIsEditing(false)
        setNewName(name)
    }

    if (isEditing) {
        return (
            <StyledTaskItem>
                <Input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}
                       placeholder={"Введите название задачи"}/>
                <StyledButtonGroup>
                    <SuccessButton onClick={() => saveNewTaskName()}>Сохранить</SuccessButton>
                    <WarningButton onClick={() => cancelTaskNameSaving()}>Отменить</WarningButton>
                </StyledButtonGroup>
            </StyledTaskItem>
        )
    }

    return (
        <StyledTaskItem>
            <Checkbox label={name} checked={isActive} onChange={handleCheckboxChange}/>
            <StyledButtonGroup>
                <PrimaryButton onClick={() => setIsEditing(true)}>Редактировать</PrimaryButton>
                <WarningButton onClick={() => removeTask(id)}>Удалить</WarningButton>
            </StyledButtonGroup>
        </StyledTaskItem>
    )
}

export default TaskItem