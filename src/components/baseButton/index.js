import React from "react";
import { ButtonStyle } from "./design";

const BaseButton = ({
    color = "primary",
    variant,
    type = "button",
    children,
    ...otherProps
}) => {
    return (
        <ButtonStyle
            color={color}
            variant={variant}
            fullWidth
            type={type}
            {...otherProps}
        >
            {children}
        </ButtonStyle>
    );
};

export default BaseButton;
