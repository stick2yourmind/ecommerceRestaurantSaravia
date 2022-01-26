import React from 'react';
import cartIcon from './icon.svg'

export const CartWidget = () => {
  return (
      <img 
        alt='carrito de compras' 
        className='navbar-img' 
        src={cartIcon} 
      />
    )
};

export default CartWidget