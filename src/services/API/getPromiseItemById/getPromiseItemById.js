import { allMenu } from '../../../Mocks/MockMenu/MockMenu'

export const getPromiseItemById = (id) =>{
    return new Promise ((res, rej)=>{
      setTimeout(()=>{
        let itemSelectedById = allMenu.filter( item => id === item.id )
        return res(itemSelectedById[0])
      }, 2000)
    })
  }
