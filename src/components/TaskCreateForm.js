import React, {useState} from 'react';
import styled from "styled-components";
import {PrimaryButton} from "../common/Button";
import {Input} from "../common/Input";

const Row = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledButtonContainer = styled.div`
    margin-left: 10px;
`

function TaskCreateForm({addTask}) {
    let [name, setName] = useState('');

    function handleClick() {
        if (name.replace(/\s/g, '') !== '') {
            addTask(name)
            setName('')
        }
    }

    return (
        <Row>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={"Введите название задачи"}/>
            <StyledButtonContainer>
                <PrimaryButton onClick={() => handleClick()}>Добавить</PrimaryButton>
            </StyledButtonContainer>
        </Row>
    )
}

export default TaskCreateForm