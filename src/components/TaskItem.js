import React from "react";
import styled from "styled-components";
import {WarningButton} from "./button";
import {Checkbox} from "./checkbox";

const StyledTaskItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TaskItem = ({id, isActive, name, toggleIsActive, removeTask}) => {

    let handleCheckboxChange = () => {
        toggleIsActive(id)
    }

    return (
        <StyledTaskItem>
            <Checkbox label={name} checked={isActive} onChange={handleCheckboxChange}/>
            <WarningButton onClick={() => removeTask(id)}>Удалить</WarningButton>
        </StyledTaskItem>
    )
}

export default TaskItem