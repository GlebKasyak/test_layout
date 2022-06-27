import React, { useState } from 'react';
import cn from "classnames"

import { Button } from "../../atoms"
import "./styles.scss"

const ButtonsGroup = ({ buttons }) => {
    const [activeButton, setActiveButton] = useState(buttons[0])

    const clickHandler = text => setActiveButton(text)

    return (
        <div className="buttons-group">
            {buttons.map((text) => <Button
                text={text}
                onClick={clickHandler}
                className={cn({ "buttons-group--is-active": activeButton === text })}
                key={text}
            />)}
        </div>
    );
};

export default ButtonsGroup ;