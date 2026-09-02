import type { ButtonProps } from "./Button.types";


const Button = ({children, ...props}: ButtonProps) => {
    return <button {...props}>{children}</button>
}

export default Button;