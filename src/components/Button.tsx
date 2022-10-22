import React, {ComponentType} from "react";
import { HeroIcon, IconName } from './HeroIcon';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: ComponentType<IconName>
    variant?: string, // default, primary, info, success, warning, danger, dark
    disabled?: boolean;
    size?: string, // sm, md, lg
    rounded?: boolean,
}

const Button: React.FC<Props> = ({
                                     children,
                                     onClick,
                                     variant = 'default',
                                     size = 'md',
                                     disabled,
                                     icon,
                                     rounded,
                                     ...rest
                                 }) => {
    // @ts-ignore

    return (
        <button
            className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '') + (rounded ? ' rounded-full p-4' : '')}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >

            {icon && <HeroIcon icon={icon}/>}
            {children}
        </button>
    );
};

export default Button;