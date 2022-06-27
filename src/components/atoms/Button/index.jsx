import React, { isValidElement } from 'react';
import cn from "classnames"

import "./styles.scss"

const Button = ({ text, onClick, className, children }) => {
    return (
        <button className={cn("button", className)} onClick={() => onClick(text)}>
            { text }
            {children}
        </button>
    );
};

export default Button;