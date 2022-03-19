import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
// Services
import { getPromiseList } from '../../services/API/getPromiseList/getPromiseList'

// Components
import ItemList from './ItemListContainerStyles'
import Item from '../Item/Item'

// endpoints
import { getAllMenu, getCategoryMenu } from '../../services/firebase/query'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  let endpointCategories = {
    undefined : getAllMenu(),
    'beers': getCategoryMenu('beers'),
    'burgers': getCategoryMenu('burgers'),
    'fries-nachos': getCategoryMenu('friesNachos'),
    'pizzas': getCategoryMenu('pizzas')
  }

  useEffect(()=>{
    // En caso que el location exista en endpointCategories, se le carga el endpoint correspondiente
    // de otra manera se carga por defecto
    let endpoint = endpointCategories?.[categoryId] || endpointCategories.undefined
    getPromiseList(endpoint)
      .then(dataFetched => {
        setProducts(dataFetched)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId])

  return (
      <ItemList>
        <div className='headerSection'>
          {products.title}
        </div>
          <ul className='ulList'>
            {
              Array.isArray(products.data) && products.data.length
                ? products.data.map((product)=> 
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
