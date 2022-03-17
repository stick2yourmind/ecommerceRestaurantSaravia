import { useContext, useState } from "react"
// Contexts
import { CartContext } from '../../Context/CartContext/CartContext'

import addIcon from './add.svg'
import subtractIcon from './subtract.svg'

const MIN_QUANTITY_DEF = 0
const MAX_QUANTITY_DEF = 10


export const ItemCount = ( { item } ) =>{
    const { addItemCart, isInCart, getItemQuantity, updateItemQuantity } = useContext(CartContext)
    const [quantity, setQuantity] = useState(()=> getItemQuantity(item.id))

    // let a = getItemQuantity(item.id)
    // console.log('getItemQuantity(item.id)', a)

    const onAdd = ( itemID ) => {
        !isInCart( itemID )
            ? addItemCart( item, quantity )
            : updateItemQuantity( item.id, quantity )
    }

    const validateInput = ({ target }) => {
        if(target.value > MIN_QUANTITY_DEF && target.value <= MAX_QUANTITY_DEF)
            return setQuantity(Math.trunc(+target.value))
        target.value > MAX_QUANTITY_DEF
            ? target.value = MAX_QUANTITY_DEF
            : target.value = MIN_QUANTITY_DEF
        setQuantity(+target.value)
    }

    return(
    <div className="quantityContainer">
        <div className="quantityItem">
        <img 
            alt={ `Subtract one ${item.title}` } 
            className='iconImg' 
            onClick={()=> quantity>MIN_QUANTITY_DEF && setQuantity(quantity - 1)}
            src={subtractIcon} 
        />
        <input  
            max={MAX_QUANTITY_DEF}
            min={MIN_QUANTITY_DEF}
            onChange={ validateInput }
            type='number'
            value={quantity} 
        >
        </input>
        <img 
            alt={ `Add one ${item.title}` } 
            className='iconImg' 
            onClick={ ()=> quantity<MAX_QUANTITY_DEF && setQuantity(quantity + 1) }
            src={addIcon}
        />
        </div>
        <button 
            className="buyButton"
            onClick={ () => onAdd(item.id) } 
            disabled={!quantity}
        >
            Comprar
        </button>
    </div>
    )
}
export default ItemCount