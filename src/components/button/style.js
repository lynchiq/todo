import styled from 'styled-components'

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.text.default};
  border: none;
  outline: none;
  border-radius: 10px;
  transition: box-shadow 0.2s ease-in-out;
  background: ${props => props.theme.colors.default.default};

  &:hover {
    background: ${props => props.theme.colors.default.hover};
  }
`

export const StyledPrimaryButton = styled(StyledButton)`
  color: ${props => props.theme.text.reverse};
  background: ${props => props.theme.colors.primary.default};

  &:hover {
    background: ${props => props.theme.colors.primary.hover};
  }
`

export const StyledWarningButton = styled(StyledButton)`
  color: ${props => props.theme.text.reverse};
  background: ${props => props.theme.colors.warning.default};

  &:hover {
    background: ${props => props.theme.colors.warning.hover};
  }
`