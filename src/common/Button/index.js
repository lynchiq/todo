import {StyledButton, StyledPrimaryButton, StyledSuccessButton, StyledWarningButton} from "./style";

export const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={() => onClick()}>{children}</StyledButton>
    )
}

export const PrimaryButton = ({children, onClick}) => {
    return (
        <StyledPrimaryButton onClick={() => onClick()}>{children}</StyledPrimaryButton>
    )
}

export const WarningButton = ({children, onClick}) => {
    return (
        <StyledWarningButton onClick={() => onClick()}>{children}</StyledWarningButton>
    )
}

export const SuccessButton = ({children, onClick}) => {
    return (
        <StyledSuccessButton onClick={() => onClick()}>{children}</StyledSuccessButton>
    )
}
