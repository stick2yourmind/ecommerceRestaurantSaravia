import React from 'react';
import ItemStyled from './ItemStyled'

const Item = ({id, title, description, price, img}) => {
  return (
    <ItemStyled>
        <img className='imgItem'
            alt={description}
            src={process.env.PUBLIC_URL + img} 
        />
        <div className='bodyItem'>
            <h4 className='titleItem'>
                {title}
            </h4>
            <p  className='priceItem'>
                $ {price}
            </p>
            <button className='buttonItem'
                id={id}
                type="button">
                Comprar
            </button>

        </div>
    
    </ItemStyled>
    );
}

export default Item