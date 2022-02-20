import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
// Services
import { getPromiseList } from '../../services/API/getPromiseList/getPromiseList'

// Components
import ItemList from './ItemListContainerStyles'
import Item from '../Item/Item'

// endpoints
import {allMenuGroupedEndpoint, beersEndpoint, burguersEndpoint, pizzasEndpoint, friesNachosEndpoint} from '../../Mocks/MockMenu/MockMenu'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  let endpointCategories = {
    undefined : allMenuGroupedEndpoint,
    'beers': beersEndpoint,
    'burgers': burguersEndpoint,
    'fries-nachos': friesNachosEndpoint,
    'pizzas': pizzasEndpoint
  }

  useEffect(()=>{
    // console.log('categoryId: ', categoryId)
    // En caso que el location exista en endpointCategories, se le carga el endpoint correspondiente
    // de otra manera se carga por defecto
    let endpoint = endpointCategories?.[categoryId] || endpointCategories.undefined
    // console.log('endpoint: ', endpoint)
    getPromiseList(endpoint)
      .then(dataFetched => {
        // console.log(`--ItemListContainer/useEffect/getPromiseList-- data fetched: 
        // ${JSON.stringify(dataFetched)}`)
        setProducts(dataFetched)
      })
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
