import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
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
    
    const returnToHome = () =>{
        return(
        <>
        <p className='msg-error'>Producto no encontrado :(</p>
        <Link className='navbar-link-404'
              to="/">
                Seccion principal
        </Link>
        
        </>    
        )
    }
    return(
        <ItemDetailContainerStyled>
            {
            Object.keys(ItemDetailed).length === 0 
                ?   <p>Cargando detalle del producto</p>
                :   ItemDetailed.id === undefined
                    ?   returnToHome()
                    :   <ItemDetail {...ItemDetailed}
                        />
            }
            
        </ItemDetailContainerStyled>
    )
}

export default ItemDetailContainer