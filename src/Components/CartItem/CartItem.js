import { useContext } from "react"
import { CartContext } from '../../Context/CartContext/CartContext'
import deleteIcon from './deleteIconCart.svg'

const CartItem = ({item, quantity}) => {
    const { deleteItemFromCart } = useContext(CartContext)
    return(
    <div key={item.id} className="itemCart">
        <img className='imgItemCart'
            alt={item.description}
            src={ '/' + item.img} 
        />
        <div className='bodyItem'>
            <h4 className='titleItem'>
                {item.title}
            </h4>
            <h5  className='priceItem'>
                $ {item.price}
            </h5>
            <h5  className='quantityItem'>
                Cantidad: { quantity }
            </h5>
            <h5  className='priceItem'>
                Subtotal: $ {item.price  * quantity}
            </h5>
        </div>
        <div className="updateDeleteItemCart">
            <button 
                className="deleteItemCart" 
                onClick={()=>deleteItemFromCart(item.id)}
            >   
                <img 
                    alt='carrito de compras' 
                    className='imgDeleteItemCart' 
                    src={deleteIcon} 
                /> 
            </button>
        </div>
    </div>
    )

}

export default CartItem
