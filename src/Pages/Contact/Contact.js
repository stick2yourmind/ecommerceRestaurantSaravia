import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { Link } from 'react-router-dom'
import { ContactContainer } from './ContactContainer'
import { FormCard } from '../../Components/FormCard/FormCard'

export const Contact = () => {  
    
    const { getCheckoutState } = useContext(CartContext)
    const returnToHome = () =>{
        return(
        <>
        <p className='msg-error'>Primero debe confirmar una compra</p>
        <Link className='link'
              to="/">
                Seccion principal
        </Link>
        
        </>    
        )
    }

    return (
    <ContactContainer>
        {!getCheckoutState()
            ?   returnToHome()
            :   <FormCard /> 
        }
    </ContactContainer>
    )
}
