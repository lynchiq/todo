import {StyledButton, StyledPrimaryButton, StyledWarningButton} from "./style";

export const Button = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
}

export const PrimaryButton = ({children}) => {
    return (
        <StyledPrimaryButton>{children}</StyledPrimaryButton>
    )
}

export const WarningButton = ({children}) => {
    return (
        <StyledWarningButton>{children}</StyledWarningButton>
    )
}
