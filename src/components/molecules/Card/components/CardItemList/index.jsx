import React from 'react';
import cn from "classnames"

import "./styles.scss"

const CardItemList = ({ data }) => {
    const text = Object.keys(data)[0]
    const status = Object.values(data)[0]

    return (
        <li className={cn("card-item-list", { "card-item-list--is-open": status === "open" })}>
            {text}
        </li>
    );
};

export default CardItemList;