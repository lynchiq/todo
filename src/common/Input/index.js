import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 9px 15px;
  background: #fafafa;
  box-shadow: inset 0 2px 3px 0 rgb(0 0 0 / 8%);
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #666;
`

export const Input = ({value, name, placeholder, ...props}) => {
    return (
        <StyledInput value={value} {...props} placeholder={placeholder}/>
    )
}