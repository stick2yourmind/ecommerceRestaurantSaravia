import React from 'react';
import { Link } from 'react-router-dom'
import ItemStyled from './ItemStyled'

const Item = ({id, title, description, price, img}) => {
  return (
    <ItemStyled>
        <img className='imgItem'
            alt={description}
            src={ '/' + img} 
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
                type="button"
            >
                <Link className='linkButtonItem' to={`/detalle/${id}`}>
                    Comprar
                </Link>
            </button>

        </div>
    
    </ItemStyled>
    );
}

export default Item