import { useState } from "react"
import addIcon from './add.svg'
import subtractIcon from './subtract.svg'

const MIN_QUANTITY_DEF = 0
const MAX_QUANTITY_DEF = 10

const ItemDetail = ({ id, title, description, price, pictureUrl:img}) => {
    const [quantity, setQuantity] = useState(0)

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
            <div className="quantityContainer">
                <img 
                    alt={`Subtract one ${title}`} 
                    className='iconImg' 
                    src={subtractIcon} 
                    onClick={()=> quantity>MIN_QUANTITY_DEF && setQuantity(quantity - 1)}
                />
                <input  
                    type='number'
                    value={quantity} 
                    min="1" 
                    max="5"
                    onChange={ ({ target }) => setQuantity(+target.value) }
                >
                </input>
                <img 
                    alt={`Subtract one ${title}`} 
                    className='iconImg' 
                    src={addIcon}
                    onClick={()=> quantity<MAX_QUANTITY_DEF && setQuantity(quantity + 1)}
                />
            </div>
        </div>

    )
} 

export default ItemDetail