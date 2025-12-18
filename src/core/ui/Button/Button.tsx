import type { ReactNode } from 'react'
import c from './Button.module.scss'

interface ButtonProps {
    children?: ReactNode;
    isFilled?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
}

function Button({
    children = "",
    isFilled = true,
    disabled = false,
    isLoading = false,
    onClick,
}: ButtonProps) {
    let className = c.container;

    if (isFilled) className += ` ${c.isFilled}`;

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={className}>
            {!isLoading && children}

            {isLoading && <div className={c.loader} />}
        </button>
    )
}

export default Button