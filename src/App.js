import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { burguers, beers, friesNachos, pizzas} from './Mocks/MockMenu'


function App() {
  return (
    <>
      <NavBar />
      <main>
          <ItemListContainer 
            endpoint={burguers} 
            title='Hamburguesas' 
          />
          <ItemListContainer 
            endpoint={friesNachos} 
            title='Fritas y Nachos' 
          />
          <ItemListContainer 
            endpoint={beers} 
            title='Cervezas' 
          />
          <ItemListContainer 
            endpoint={pizzas} 
            title='Pizzas' 
          />
      </main>
    </>
  );
}

export default App;
