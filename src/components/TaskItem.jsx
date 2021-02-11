import React from "react";
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

export const TaskItem = (props) => {
    if (props.isEditing) {
        return (
            <StyledTaskItem>
                <Input type="text" value={props.newName} onChange={(e) => props.setNewName(e.target.value)}
                       placeholder={"Введите название задачи"}/>
                <StyledButtonGroup>
                    <SuccessButton onClick={props.saveEditedName}>Сохранить</SuccessButton>
                    <WarningButton onClick={props.cancelEditing}>Отменить</WarningButton>
                </StyledButtonGroup>
            </StyledTaskItem>
        )
    }

    return (
        <StyledTaskItem>
            <Checkbox label={props.name} checked={props.isActive} onChange={props.handleCheckboxChange}/>
            <StyledButtonGroup>
                <PrimaryButton onClick={props.toggleEditing}>Редактировать</PrimaryButton>
                <WarningButton onClick={props.remove}>Удалить</WarningButton>
            </StyledButtonGroup>
        </StyledTaskItem>
    )
}