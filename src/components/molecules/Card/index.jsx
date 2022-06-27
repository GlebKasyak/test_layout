import React from 'react';
import cn from "classnames"

import { Tag, Button } from "../../atoms"
import { CardItemList } from "./components"

import "./styles.scss"

const Card = ({ price, tagText, features }) => {
    const isPremium = tagText === "premium"
    //если карта будет использоваться с другим контентем, то лучше передавать тему передавать как пропс
    const theme = isPremium ? "black" : "default"

    return (
        <div className={cn("card", `card-theme-${theme}`)}>
            <Tag text={tagText} />
            <h2 className="card-title">{price}</h2>
            <ul className="card-content">
                {features.map((feature, i) => <CardItemList data={feature} key={i} /> )}
            </ul>
            <Button text={isPremium ? "try premium" :"join"} className={isPremium ? "button--premium" : "button--default"} >
                <span>&rarr;</span>
            </Button>
        </div>
    );
};

export default Card;