import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
<div className="add-button"><CustomButton>add to cart</CustomButton></div>
</div>
        <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
    </div>

);

export default CollectionItem;
