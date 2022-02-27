import { db } from './config'
import { collection, getDocs } from 'firebase/firestore'
export const getAllMenu = async () =>{
    const allMenu = collection(db, 'productos')
    const data = await getDocs(allMenu)
    let aux = data( (snapshot) => {
        snapshot.docs.map((doc) => doc.data())
    } )
    return aux
}