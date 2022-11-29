import styled, { css } from "styled-components";

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
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white}

`


 /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }}  */