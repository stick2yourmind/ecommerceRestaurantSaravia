import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext  } from '../../Context/CartContext/CartContext'
import cartIcon from './icon.svg'

export const CartWidget = () => {
  const { totalQuantityCart } = useContext( CartContext )

  const renderCardWidget = () => {
    return(
      <div className='cartContainer'>
        <Link to="/cart">
          <img 
            alt='carrito de compras' 
            className='cartImg' 
            src={cartIcon} 
          />
          <p className='cartQuantity'>{ `${totalQuantityCart()}` }</p>
       </Link>
      </div>

    )
  }

  return (
      totalQuantityCart() 
        ? renderCardWidget() 
        : ''
    )
};

export default CartWidget