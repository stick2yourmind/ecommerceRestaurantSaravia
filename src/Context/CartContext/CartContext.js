import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [checkout, setCheckout] = useState(false)

    const addItemCart = (item, quantity) => {
        setCart([...cart, { item, quantity }])
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = ( itemId ) => {
        return cart.some( ({ item }) => {
            return item.id === itemId
        } )
    }

    const getItemQuantity = ( itemID ) => {
        let query = cart.filter( ( { item }) =>  item.id === itemID )
        if(query[0]?.quantity){
            return query[0].quantity
        }
        return 0
    }

    const updateItemQuantity = ( itemID , newQuantity ) => {
        setCart(cart.map( ({item, quantity}) => {
            if( item.id !== itemID )
                return { item, quantity }
            return { item, quantity: newQuantity }
        } ))
    }

    const totalQuantityCart = () => {
        return cart.reduce( ( totalQuantity, { quantity } ) =>   totalQuantity + quantity , 0)
    }

    const deleteItemFromCart = ( itemId ) => {
        setCart(cart.filter( ({ item }) => item.id !== itemId))
    }

    const totalPriceCart = ( ) => {
        return cart.reduce( (totalPrice, { item, quantity }) => totalPrice += +item.price*+quantity,0 )
    }

    const getCheckoutState = (  ) => {
        return checkout
    }

    const setCheckoutState = (  ) => {
        setCheckout(true)
        return checkout
    }
    const resetCheckoutState = (  ) => {
        setCheckout(false)
        return checkout
    }
    return(
        <CartContext.Provider value={{
            addItemCart,
            cart,
            clearCart,
            isInCart,
            getItemQuantity,
            updateItemQuantity,
            deleteItemFromCart,
            totalPriceCart,
            totalQuantityCart,
            getCheckoutState,
            setCheckoutState,
            resetCheckoutState
        }}
        >
            { children }
        </CartContext.Provider>
    )
}