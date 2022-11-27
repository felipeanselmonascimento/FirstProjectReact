import styled from "styled-components";

interface IButtonContainerProps {
    variant: 'primary' | 'secondary' | 'danger' | 'success';
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme.primary}

    /* ${props => {
        return `background-color: ${buttonVariants[props.variant]}`
    }} */
`