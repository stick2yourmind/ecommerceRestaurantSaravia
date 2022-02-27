import { db } from './config'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

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
    const itemFetchedMenu = {
        id: snapshotData.id,
        ...snapshotData.data()
    }
    return itemFetchedMenu
}
