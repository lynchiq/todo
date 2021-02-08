import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  cursor:pointer;
  display: inline-block;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? props.theme.colors.warning.default : props.theme.colors.default.default)};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

export const Checkbox = ({label, checked, ...props }) => {
    return (
        (
            <CheckboxContainer>
                <Label>
                    <StyledCheckbox checked={checked}>
                        <Icon viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                        </Icon>
                    </StyledCheckbox>
                    <HiddenCheckbox checked={checked} {...props} />
                    {label}
                </Label>
            </CheckboxContainer>
        )
    )
}