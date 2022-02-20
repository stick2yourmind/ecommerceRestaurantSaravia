import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { CartStyled } from "./CartStyled"

const Cart = () => {
    const { cart, totalPriceCart } = useContext(CartContext)
    return(
        <>
        {cart.map( ({item:{id}, item:{description}, item:{title}, item:{img}, item:{price},quantity}) => (
                <CartStyled
                >   
                    <img className='imgItemCart'
                        alt={description}
                        src={ '/' + img} 
                    />
                    <div className='bodyItem'>
                    <h4 className='titleItem'>
                        {title}
                    </h4>
                    <h5  className='priceItem'>
                        $ {price}
                    </h5>
                    <h5  className='quantityItem'>
                        Cantidad: { quantity }
                    </h5>
                    <h5  className='priceItem'>
                        Subtotal: $ {price  * quantity}
                    </h5>
                    

                    </div>
                </CartStyled>
        ) )}
        <h3>
            Total: $ {totalPriceCart()}
        </h3>
        </>
    )

}

export default Cart