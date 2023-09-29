import React from "react"
import { StyledButton } from "./ButtonStyle";

const Button = ({children, radius = '32', disabled = false}) => {
    return (
        <StyledButton
            whileTap={{scale: 0.95}}
            disabled={disabled}
            radius={radius}
>
            {children}
        </StyledButton>
    )
};

export default Button