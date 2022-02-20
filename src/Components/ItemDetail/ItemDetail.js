import { useContext, useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({ id, title, description, price, pictureUrl:img}) => {
    const { isInCart: isInCartContextGetter } = useContext(CartContext)
    const [isInCart, setIsInCart] = useState(()=>isInCartContextGetter(id))

    useEffect(() => {
      let aux = isInCartContextGetter(id)
      console.log('aux: ', aux)
      setIsInCart(aux)
    }, )
    


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
            {!isInCart 
                ? <ItemCount item={ {id, title, description, price, img} }/>
                : <Link to="/cart"> Terminar compra</Link>}

        </div>

    )
} 

export default ItemDetail