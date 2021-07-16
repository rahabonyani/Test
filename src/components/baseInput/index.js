import React from "react";
import { InputStyle } from "./design";

const BaseInput = ({
    type,
    label,
    name,
    id,
    value,
    onChange,
    error,
    helperText,
    variant,
    ...otherProps
}) => {
    return (
        <InputStyle
            id={id}
            name={name}
            label={label}
            type={type}
            value={value}
            variant={variant}
            onChange={onChange}
            error={error}
            helperText={helperText}
            {...otherProps}
        />
    );
};

export default BaseInput;
