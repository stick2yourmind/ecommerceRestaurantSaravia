import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import { ItemDetailContainerStyled } from './ItemDetailContainerStyled'
import { getItemById } from '../../services/firebase/query'


const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [ItemDetailed, setItemDetailed ] = useState({})

     useEffect( () => {
        getItemById(itemId)
            .then(dataFetched => {
        setItemDetailed(dataFetched)
      })
     } , [itemId])

    return(
        <ItemDetailContainerStyled>
            {
            Object.keys(ItemDetailed).length === 0 
                ?   <p>Cargando detalle del producto</p>
                :   <ItemDetail {...ItemDetailed}
                    />
            }
            
        </ItemDetailContainerStyled>
    )
}

export default ItemDetailContainer