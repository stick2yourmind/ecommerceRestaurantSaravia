import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPromiseItemById } from '../../services/API/getPromiseItemById/getPromiseItemById'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import { ItemDetailContainerStyled } from './ItemDetailContainerStyled'


const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [ItemDetailed, setItemDetailed ] = useState({})

    useEffect( () => {
        // console.log(itemId)
        getPromiseItemById(itemId)
            .then((item)=> {
                setItemDetailed(item)
                // console.log(item)    
            })
    } , [])

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