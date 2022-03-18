import { Formik, Form } from 'formik'
import { TextField } from '../TextField/TextField'
import { yupValidationSchema } from './yupValidationSchema'
import { setCartOrder } from '../../services/firebase/query'
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"

const initForm = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    emailConfirmation: '',
  }

export const FormCard = () => {
    const { cart } = useContext(CartContext) 
    const [submitFinished, setSubmitFinished ] = useState(false)
    const onSubmitHandler = (values, { setSubmitting }) => {
        console.log('onSubmitHandler')
        let userData = {
                firstName:values.firstName, 
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                email:values.email
            } 
        setCartOrder(cart,userData).then((cartOrder) => {
            console.log(cartOrder)
            setSubmitting(false)
        })
    }
    return (
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
