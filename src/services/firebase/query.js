import { db } from './config'
import { collection, doc, getDoc, getDocs, addDoc, query, where, serverTimestamp } from 'firebase/firestore'
// import { v4 as uuidv4 } from 'uuid';


const titles = {
    'allMenu' : 'Nuestro menu',
    'beers': 'Cervezas',
    'burgers': 'Burguers',
    'fries-nachos': 'Fritas y Nachos',
    'pizzas': 'Pizzas'
  }

export const getAllMenu = async () =>{
    const allMenuCollection = collection(db, 'productos')
    const snapshotData = await getDocs(allMenuCollection)
    const allMenu = await snapshotData.docs.map( doc => {
        return{
            id: doc.id,
            ...doc.data()
        }
    })
    return {
        data: allMenu,
        title: titles['allMenu']
    }
}

export const getCategoryMenu = async (categoryToFetch) =>{
    const allMenuCollection = collection(db, 'productos')
    const categoryFetched = query(allMenuCollection, where('category', '==', categoryToFetch))
    const snapshotData = await getDocs(categoryFetched)
    const categoryMenu = await snapshotData.docs.map( doc => {
        return{
            id: doc.id,
            ...doc.data()
        }
    })
    return {
        data: categoryMenu,
        title: titles[categoryToFetch]
    }
}


export const getItemById = async (idToFetch) =>{
    const itemFetched = doc(db, 'productos', idToFetch)
    const snapshotData = await getDoc(itemFetched)
    let itemFetchedMenu = {
        id: snapshotData.id,
        ...snapshotData.data()
    }
    // snapshotData.data() returns undefined when no data is matched
    if (snapshotData.data() === undefined)
        itemFetchedMenu = {id: undefined}
    return itemFetchedMenu
}

export const setCartOrder = async (cart, userData) =>{
    let newCartOrder = null
    try{
        const dbReference = doc(db, "cart_orders", userData.email)
        newCartOrder = {...cart, timestamp: serverTimestamp(), ...userData}
        const userCollectionReference = collection(dbReference, 'orders')
        const docRef = await addDoc(userCollectionReference, newCartOrder)
        newCartOrder['id'] = docRef.id
    }
    catch(error){
        newCartOrder = {error}
    }
    finally{
        return newCartOrder
    }
}