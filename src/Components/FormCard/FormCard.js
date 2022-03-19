import { Formik, Form } from 'formik'
import { TextField } from '../TextField/TextField'
import { yupValidationSchema } from './yupValidationSchema'
import { setCartOrder } from '../../services/firebase/query'
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { Link } from 'react-router-dom'

const initForm = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    emailConfirmation: '',
  }

export const FormCard = () => {
    const { cart, clearCart } = useContext(CartContext)
    const [submitFinished, setSubmitFinished ] = useState(null)
    const onSubmitHandler = (values) => {
        let userData = {
                firstName:values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                email:values.email
            }
        setCartOrder(cart,userData).then((cartOrder) => {
            setSubmitFinished(cartOrder)
            clearCart()
        })
    }

    const purchaseNotFinished = () => {
        return(
            <>
                <h2 className='formTitle'>Datos de contacto</h2>
                <Formik
                    initialValues={initForm}
                    validationSchema={yupValidationSchema}
                    onSubmit={onSubmitHandler}
                >
                    <Form className='formBody'>
                        <TextField label='Nombre' name='firstName' type='text' placeholder="Nombre"/>
                        <TextField label='Apellido' name='lastName' type='text' placeholder="Apellido"/>
                        <TextField label='Telefono' name='phoneNumber' type='tel' placeholder="Telefono"/>
                        <TextField label='Email' name='email' type='email' placeholder="Email"/>
                        <TextField label='Reingrese email' name='emailConfirmation' type='email'
                            placeholder="Reingrese email"/>
                        <button className='btn' type='submit'>Finalizar compra</button>
                    </Form>
                </Formik>
            </>

        )
    }

    const purchaseFinished = () => {
        return(
            <>
                <h3 className="msg" >
                    {`Identificación de su compra: ${submitFinished.id}`}
                </h3>
                <Link className="link" to='/' onClick={()=> setSubmitFinished(null)}> Volver a la pagina principal</Link>
            </>

        )
    }
    return (
        <>
        {!submitFinished
            ? purchaseNotFinished()
            : purchaseFinished()}
        </>

    )
}
