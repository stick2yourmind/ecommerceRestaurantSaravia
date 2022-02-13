import React from 'react';

// const ItemDetail = (props) => {
//     console.log('ItemDetail props.id: ' + props.id)

// }




const ItemDetail = ({ id, title, description, price, pictureUrl:img}) => {

    return(
        <div className="itemCardDetailed">
            <h1 className="itemTitleDetail">
                {title}
            </h1>
            <div className="itemBodyDetail">
                <img className="itemImgDetail" src={ '/' + img}  alt={description} />
                <h4 className="itemDescriptionDetail">
                   {description} 
                </h4>
                <h4 className='itemPriceDetail'>
                    $ {price}
                </h4>
            </div>

        </div>

    )
} 

export default ItemDetail