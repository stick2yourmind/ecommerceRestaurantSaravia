import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({ id, title, description, price, pictureUrl:img}) => {
    const { isInCart } = useContext(CartContext)

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
            {!isInCart(id) 
                ? <ItemCount item={ {id, title, description, price, img} }/>
                : <Link className="checkoutLink" to="/cart"> Finalizar compra</Link>}

        </div>
    )
} 

export default ItemDetail