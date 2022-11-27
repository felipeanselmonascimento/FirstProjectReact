
import { ButtonContainer } from './Button.styles';

interface IButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button ({ variant = 'primary'}: IButtonProps) {
    return (
        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    )
}
