import React from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: React.ReactElement
    variant?: string, // default, primary, info, success, warning, danger, dark
    disabled?: boolean;
    size?: string, // sm, md, lg
    rounded?: string,
}

const Button: React.FC<Props> = ({
                                     children,
                                     onClick,
                                     variant = 'default',
                                     size = 'md',
                                     disabled,
                                     ...rest
                                 }) => {
    return (
        <button
            className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;