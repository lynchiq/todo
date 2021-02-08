import React, {useState} from 'react';
import styled from "styled-components";
import {PrimaryButton} from "./button";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input``

function TaskCreateForm({addTask}) {
    let [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        if (name.replace(/\s/g, '') !== '') {
            addTask(name)
            setName('')
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={"Введите название задачи"}/>
            <PrimaryButton>Добавить</PrimaryButton>
        </Form>
    )
}

export default TaskCreateForm