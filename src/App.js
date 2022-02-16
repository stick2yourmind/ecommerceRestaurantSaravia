import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
// Context
import { CartContext } from './Context/CartContext'
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter basename={process.env.PUBLIC_URL} value={cart} >
        <NavBar />
        <main>
          <Routes>  
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer />}  />
            <Route path="/detalle/:itemId" element={<ItemDetailContainer />}  />
            <Route path='*' element={ <Navigate to='/'/> } />
          </Routes>
        </main>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
