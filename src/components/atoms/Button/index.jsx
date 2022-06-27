import React from 'react';
import cn from "classnames"

import "./styles.scss"

const Button = ({ text, onClick, className }) => {
    return (
        <button className={cn("button", className)} onClick={() => onClick(text)}>
            { text }
        </button>
    );
};

export default Button;