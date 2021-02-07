import React from "react";
import styled from "styled-components";

const TaskWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Label = styled.label`
  cursor: pointer;
  user-select: none;
  text-decoration: ${props => props.active ? "line-through" : "none"};
`

const Input = styled.input`

`

const Button = styled.button`
  cursor: pointer;
`

function Task({id, active, name, toggleActive, removeTask}) {
    return (
        <TaskWrapper>
            <Label active={active}>
                <Input type="checkbox" checked={active} onChange={() => toggleActive(id)}/>
                {name}
            </Label>
            <Button onClick={() => removeTask(id)}>X</Button>
        </TaskWrapper>
    )
}

export default Task