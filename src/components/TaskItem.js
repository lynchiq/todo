import React from "react";
import styled from "styled-components";
import {WarningButton} from "./button";
import {Checkbox} from "./checkbox";

const TaskWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TaskItem = ({id, isActive, name, toggleIsActive, removeTask}) => {
    return (
        <TaskWrapper>
            <Checkbox id={id} checked={isActive} onChange={toggleIsActive}/>
            <WarningButton onClick={() => removeTask(id)}>Удалить</WarningButton>
        </TaskWrapper>
    )
}

export default TaskItem