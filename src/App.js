import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
// Context
import { CartProvider } from './Context/CartContext/CartContext'
import Cart from "./Pages/Cart/Cart";
import { Contact } from "./Pages/Contact/Contact";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <main>
          <Routes>  
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer />}  />
            <Route path="/detalle/:itemId" element={<ItemDetailContainer />}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/contact" element={<Contact />}  />
            <Route path='*' element={ <Navigate to='/'/> } />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
