import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { CartStyled } from "./CartStyled"
import CartItem from "../../Components/CartItem/CartItem"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPriceCart, totalQuantityCart } = useContext(CartContext)
    const { setCheckoutState } = useContext(CartContext)
    
    const cartNotEmpty = () =>{
        return(
            <>
                {cart.map( (itemOrder) => 
                        <CartItem {...itemOrder} key={itemOrder.item.id}/>
                        )}
                <h3 className="totalPriceCart" >
                    Total: $ {totalPriceCart()}
                </h3>
                <Link className="link" onClick={setCheckoutState} to="/contact"> Confirmar compra</Link>
            </>)

    }

    const cartEmpty = () =>{
        return(
            <div className="emptyCartContainer">
                <p className="emptyCartTitle">Carrito vacio :(</p>
                <Link className="emptyCartLink" to='/'> Volver a la pagina principal</Link>
            </div>

        )
    }
    return(
        <CartStyled>
        {totalQuantityCart()
            ? cartNotEmpty()
            : cartEmpty()}
        </CartStyled>
    )

}

export default Cart