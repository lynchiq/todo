import React, {useState} from 'react';
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  flex-grow: 1;
  height: 20px;
`

const Button = styled.button`
  cursor: pointer;
  display: block;
  margin-left: 10px;
  flex-grow: 0.1;
  height: 40px;
  background: #7c73ff;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  :hover {
    background: #443bcc;
    color: #fff;
  }
`

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
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <Button>+</Button>
        </Form>
    )
}

export default TaskCreateForm