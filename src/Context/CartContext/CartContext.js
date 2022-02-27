import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItemCart = (item, quantity) => {
        console.log('-- CartContext: addItem --')
        setCart([...cart, { item, quantity }])
    }

    const clearCart = () => {
        console.log('-- CartContext: clearCart --')
        setCart([])
    }

    const isInCart = ( itemId ) => {
        console.log('-- CartContext: isInCart --')
        return cart.some( ({ item }) => {
            return item.id === itemId
        } )
    }

    const getItemQuantity = ( itemID ) => {
        console.log('-- CartContext: getItemQuantity --')
        let query = cart.filter( ( { item }) =>  item.id === itemID )
        if(query[0]?.quantity){
            return query[0].quantity
        }
        return 0
    }

    const updateItemQuantity = ( itemID , newQuantity ) => {
        console.log('-- CartContext: updateItemQuantity --')
        setCart(cart.map( ({item, quantity}) => {
            if( item.id !== itemID )
                return { item, quantity }
            return { item, quantity: newQuantity }
        } ))
    }

    const totalQuantityCart = () => {
        console.log('-- CartContext: totalQuantityCart --')
        return cart.reduce( ( totalQuantity, { quantity } ) =>   totalQuantity + quantity , 0)
    }

    const deleteItemFromCart = ( itemId ) => {
        console.log('-- CartContext: removeItemFromCart --')
        setCart(cart.filter( ({ item }) => item.id !== itemId))
    }

    const totalPriceCart = ( ) => {
        console.log('-- CartContext: totalPriceCart --')
        return cart.reduce( (totalPrice, { item, quantity }) => totalPrice += +item.price*+quantity,0 )
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
            totalQuantityCart
        }}
        >
            { children }
        </CartContext.Provider>
    )
}