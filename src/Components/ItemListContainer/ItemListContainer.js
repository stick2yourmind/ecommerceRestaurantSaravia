import React, {useState, useEffect} from 'react';
import ItemList from './ItemListContainerStyles'
import Item from '../Item/Item'

const ItemListContainer = ({title, endpoint}) => {
  const [products, setProducts] = useState([])

  const getPromiseList = (dataList) =>{
    return new Promise ((res, rej)=>{
      setTimeout(()=>{
        return res(dataList)
      }, 2000)
    })
  }

  useEffect(()=>{
    getPromiseList(endpoint)
      .then(data => {
        console.log(`--ItemListContainer/useEffect/getPromiseList-- data fetched: 
        ${JSON.stringify(data)}`)
        setProducts(data)
      })
  }, [])

  return (
      <ItemList>
        <div className='headerSection'>
          {title}
        </div>
          <ul className='ulList'>
            {
              products.length
                ? products.map((product)=> 
                      <Item 
                        description = {product.description}
                        id = {product.id}
                        img = {product.pictureUrl}
                        key = {product.id} 
                        price = {product.price}
                        title = {product.title} 
                      />)
                : <p> Cargando productos</p>
            }
          </ul>    
      </ItemList>
    );
}

export default ItemListContainer
