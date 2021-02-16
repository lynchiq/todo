import { StyledInput } from './Input.style'

export const Input = ({ value, name, placeholder, ...props }) => {
  return <StyledInput value={value} {...props} placeholder={placeholder} />
}
