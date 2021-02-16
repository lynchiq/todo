import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox
} from './Checkbox.style'

export const Checkbox = ({ label, checked, ...props }) => {
  return (
    <CheckboxContainer>
      <Label checked={checked}>
        <StyledCheckbox checked={checked}>
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </StyledCheckbox>
        <HiddenCheckbox checked={checked} {...props} />
        {label}
      </Label>
    </CheckboxContainer>
  )
}
