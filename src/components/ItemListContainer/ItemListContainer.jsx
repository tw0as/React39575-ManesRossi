import React from 'react'
import './ItemListContainer.css'
function ItemListContainer(props) {
    const {title,price,detail,imgurl,greeting} = props;
    return (
        <div className="ilc">
            <div>
                <img src={imgurl} width="800" alt="" />
            </div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;