import { useContext } from 'react/cjs/react.development';
import { CartContext  } from '../../Context/CartContext/CartContext'
import cartIcon from './icon.svg'

export const CartWidget = () => {
  const { totalQuantityCart } = useContext( CartContext )

  return (
      <div className='cartContainer'>
        <img 
          alt='carrito de compras' 
          className='cartImg' 
          src={cartIcon} 
        />
        <p className='cartQuantity'>{ `${totalQuantityCart()}` }</p>
      </div>
    )
};

export default CartWidget