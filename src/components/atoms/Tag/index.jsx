import React from 'react';

import "./styles.scss"

const Tag = ({ text }) => {
    return (
        <span className="tag">
            {text}
        </span>
    );
};

export default Tag;