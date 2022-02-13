import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
  );
}

export default App;
