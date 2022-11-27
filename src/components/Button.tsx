import styles from './Button.module.css'

interface IButtonProps {
    color: 'primary' | 'secondary' | 'danger' | 'sucess' | 'neutral';
}

export function Button ({ color }: IButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
    )
}

console.log(styles)