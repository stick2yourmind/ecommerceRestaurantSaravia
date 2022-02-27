import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { CartStyled } from "./CartStyled"
import CartItem from "../../Components/CartItem/CartItem"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPriceCart, totalQuantityCart } = useContext(CartContext)
    const cartNotEmpty = () =>{
        return(
            <>
                {cart.map( (itemOrder) => 
                        <CartItem {...itemOrder} />
                        )}
                <h3 className="totalPriceCart" >
                    Total: $ {totalPriceCart()}
                </h3>
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